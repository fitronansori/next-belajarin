import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const CourseCard = () => {
  return (
    <Link href={"/courses/1"} className="group">
      <Card className="lg:flex-row pt-0 pb-4 lg:p-0 lg:border-0 lg:shadow-none lg:rounded-none gap-4 group-hover:shadow-lg transition-shadow lg:group-hover:shadow-none">
        <CardHeader className="relative w-full h-[200px] md:h-[300px] lg:w-[500px] lg:h-[150px]">
          <Image
            src={"/assets/images/placeholder.webp"}
            alt=""
            fill
            className="object-cover rounded-t-lg lg:rounded-lg"
          />

          <Badge className="absolute top-2 right-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            Best Seller
          </Badge>
        </CardHeader>

        <CardContent className="px-2 lg:px-0 flex flex-col gap-3">
          <CardTitle className="lg:text-xl line-clamp-2 lg:line-clamp-1 group-hover:text-primary transition-colors">
            The Complete React Developer Course (w/ Redux, Hooks, GraphQL)
          </CardTitle>

          <CardDescription className="md:text-base line-clamp-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque iure
            voluptas, odio, officia, alias suscipit temporibus velit quam facere
            a expedita unde obcaecati natus in praesentium consectetur eos fuga.
            Commodi!
          </CardDescription>

          <div className="flex flex-wrap gap-2">
            <Badge>Rp. 100.000</Badge>
            <Badge>Rating: 4.5</Badge>
            <Badge>Level: Pemula</Badge>
            <Badge>Kategori: Web Development</Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
export default CourseCard;
