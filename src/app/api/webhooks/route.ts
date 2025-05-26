import { prisma } from "@/lib/prisma";
import { verifyWebhook } from "@clerk/nextjs/webhooks";

export async function POST(req: Request) {
  try {
    const evt = await verifyWebhook(req);

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data;
    const eventType = evt.type;

    switch (eventType) {
      case "user.created":
        await prisma.user.create({
          data: {
            clerkId: id,
            name: evt.data.first_name + " " + evt.data.last_name,
            username: evt.data.username,
            email: evt.data.email_addresses[0].email_address,
            imageUrl: evt.data.image_url || "",
            role: evt.data.public_metadata.role || "user",
          },
        });

      case "user.updated":
        await prisma.user.update({
          where: { clerkId: id },
          data: {
            name: evt.data.first_name + " " + evt.data.last_name,
            username: evt.data.username,
            email: evt.data.email_addresses[0].email_address,
            imageUrl: evt.data.image_url || "",
            role: evt.data.public_metadata.role || "user",
          },
        });

      case "user.deleted":
        await prisma.user.delete({
          where: { clerkId: id },
        });

        break;
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
