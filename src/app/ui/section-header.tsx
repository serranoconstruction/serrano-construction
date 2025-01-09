import { ReactNode } from "react";
import { cn } from "../utils";

export type SectionHeaderProps = {
  children: ReactNode;
  className?: string;
};

export const SectionHeader = ({ children, className }: SectionHeaderProps) => {
  return (
    <h2
      className={cn("text-3xl font-bold text-blue-400 lg:text-5xl", className)}
    >
      {children}
    </h2>
  );
};
