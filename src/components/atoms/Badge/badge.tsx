import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/libs/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition duration-200 ease-in-out focus:outline-none focus:ring-2",
  {
    variants: {
      variant: {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        danger: "bg-red-500 text-white hover:bg-red-600",
        secondary: "bg-gray-500 text-white hover:bg-gray-600",
        success: "bg-green-600 text-white hover:bg-green-700",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ children, className, variant, ...props }) => {
    return (
      <div className={cn(badgeVariants({ variant, className }))} {...props}>
        {children}
      </div>
    );
  },
);

export { Badge, badgeVariants };
