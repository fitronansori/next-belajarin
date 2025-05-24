import { cn } from "@/lib/utils";

type TitleProps = {
  title?: string;
  description?: string;
  className?: string;
  classNameTitle?: string;
};

const Title = ({
  title,
  description,
  className,
  classNameTitle,
}: TitleProps) => {
  return (
    <div className={cn("", className)}>
      <h1 className={cn("text-xl font-bold", classNameTitle)}>{title}</h1>

      {description && <p className="">{description}</p>}
    </div>
  );
};
export default Title;
