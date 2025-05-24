import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReactNode } from "react";

interface ChooseUsCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ChooseUsCard = ({ icon, title, description }: ChooseUsCardProps) => {
  return (
    <Card className="py-4 gap-4">
      <CardHeader className="flex items-center justify-center">
        <div className="max-w-max bg-primary flex items-center justify-center rounded-full p-4 text-4xl mb-2">
          {icon}
        </div>
      </CardHeader>

      <CardContent className="px-4 space-y-2">
        <CardTitle className="text-center">{title}</CardTitle>

        <CardDescription className="text-center">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ChooseUsCard;
