import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";

const buttonVariants = cva(
  "rounded-md px-6 py-2 text-sm font-medium transition-colors inline-flex items-center justify-center",
  {
    variants: {
      variant: {
        solid: "text-white-400 bg-blue-400 hover:bg-blue-400/90",
        outline: "border-white text-white-400 border hover:bg-white/10",
      },
    },
    defaultVariants: {
      variant: "solid",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, href, ...props }, ref) => {
    const Comp = href ? "a" : "button";
    return (
      // @ts-expect-error - not worth fixing
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref as any}
        href={href}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
