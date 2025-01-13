import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";
import Link from "next/link";

const buttonVariants = cva(
  "rounded-md text-sm font-medium transition-colors inline-flex items-center justify-center",
  {
    variants: {
      variant: {
        solid: "px-6 py-2 text-white-400 bg-blue-400 hover:bg-blue-400/90",
        outline:
          "px-6 py-2 border border-white-400 text-white-400 hover:bg-white-400/10",
        destructive: "px-6 py-2 text-white-400 bg-red-500 hover:bg-red-500/90",
      },
      size: {
        default: "",
        icon: "p-2",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "default",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, href, children, ...props }, ref) => {
    const Comp = href ? Link : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref as any}
        // @ts-expect-error - not worth fixing
        href={href}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? "Loading..." : children}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
