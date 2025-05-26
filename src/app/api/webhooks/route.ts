import { prisma } from "@/lib/prisma";
import { WebhookEvent } from "@clerk/nextjs/webhooks";
import { headers } from "next/headers";
import { Webhook } from "svix";

export async function POST(req: Request) {
  try {
    const secret = process.env.CLERK_WEBHOOK_SIGNING_SECRET;

    if (!secret) return new Response("Missing secret", { status: 500 });

    const wh = new Webhook(secret);
    const body = await req.text();
    const headerPayload = await headers();

    const event = wh.verify(body, {
      "svix-id": headerPayload.get("svix-id")!,
      "svix-timestamp": headerPayload.get("svix-timestamp")!,
      "svix-signature": headerPayload.get("svix-signature")!,
    }) as WebhookEvent;

    if (event.type === "user.created") {
      const {
        id,
        email_addresses,
        first_name,
        last_name,
        username,
        image_url,
        public_metadata,
      } = event.data;

      await prisma.user.create({
        data: {
          clerkId: id,
          name: `${first_name} ${last_name}`,
          username: username,
          email: email_addresses[0].email_address,
          imageUrl: image_url || "",
          role: public_metadata.role || "user",
        },
      });
    }

    if (event.type === "user.updated") {
      const {
        id,
        email_addresses,
        first_name,
        last_name,
        username,
        image_url,
        public_metadata,
      } = event.data;

      await prisma.user.update({
        where: { clerkId: id },
        data: {
          name: `${first_name} ${last_name}`,
          username: username,
          email: email_addresses[0].email_address,
          imageUrl: image_url || "",
          role: public_metadata.role || "user",
        },
      });
    }

    if (event.type === "user.deleted") {
      const { id } = event.data;

      await prisma.user.delete({
        where: { clerkId: id },
      });
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
