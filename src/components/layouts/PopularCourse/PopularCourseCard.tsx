import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const PopularCourseCard = () => {
  return (
    <Link href="/courses/data-science-fundamentals" className="group">
      <Card className="pt-0 pb-4 lg:p-0 lg:border-0 lg:shadow-none gap-4">
        <CardHeader className="relative aspect-video">
          <Image
            src={"/assets/images/placeholder.webp"}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="size-auto object-cover brightness-75 rounded-t-xl lg:rounded-md transition duration-200 group-hover:brightness-90"
          />
        </CardHeader>

        <CardContent className="px-4 lg:px-0 space-y-2">
          <CardTitle className="line-clamp-1 transition-colors duration-200 group-hover:text-primary">
            Data Science Fundamentals
          </CardTitle>

          <CardDescription className="line-clamp-2">
            Learn the basics of data analysis and visualization.
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};
export default PopularCourseCard;
