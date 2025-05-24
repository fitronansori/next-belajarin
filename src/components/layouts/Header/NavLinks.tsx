import { nav_links } from "@/constants/data";
import { cn } from "@/lib/utils";
import Link from "next/link";

type NavLinkProps = {
  className?: string;
  classNameLink?: string;
};

const NavLinks = ({ className, classNameLink }: NavLinkProps) => {
  return (
    <nav className={cn("space-x-4", className)}>
      {nav_links.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={cn(
            "text-sm font-medium hover:text-primary transition-colors duration-300 ease-in-out",
            classNameLink
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};
export default NavLinks;
