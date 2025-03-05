import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type IconizedItem = {
  title: string;
  url: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

type NavigationItem = {
  title: string;
  url: string;
  target?: "_self" | "_blank" | "_parent" | "_top" | "_unfencedTop";
};

export type { IconizedItem, NavigationItem };
