import { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";

const buttonVariants = cva(
  "inline-flex items-center rounded-md text-center text-sm font-medium transition duration-200 ease-in-out",
  {
    variants: {
      variant: {
        primary:
          "bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600 focus:ring-2 focus:ring-blue-200",
        danger:
          "bg-red-500 text-white hover:bg-red-600 focus:bg-red-600 focus:ring-2 focus:ring-red-200",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-gray-500 text-white hover:bg-gray-600 focus:bg-gray-600 focus:ring-2 focus:ring-gray-200",
      },
      size: {
        default: "h-10 px-3 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, size, variant, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);

export { Button, buttonVariants };
