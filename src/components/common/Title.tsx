import { cn } from "@/lib/utils";

type TitleProps = {
  title?: string;
  description?: string;
  className?: string;
  classNameTitle?: string;
  classNameDescription?: string;
};

const Title = ({
  title,
  description,
  className,
  classNameTitle,
  classNameDescription,
}: TitleProps) => {
  return (
    <div className={cn("space-y-2", className)}>
      <h1 className={cn("text-xl font-bold", classNameTitle)}>{title}</h1>

      {description && (
        <p className={cn("w-full max-w-[580px]", classNameDescription)}>
          {description}
        </p>
      )}
    </div>
  );
};
export default Title;
