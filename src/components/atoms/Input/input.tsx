import * as React from "react";
import { cn } from "@/libs/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "border-input flex h-10 w-full rounded-md border-2 px-3 py-2 text-sm placeholder-[#B3B3B3] transition duration-200 ease-in-out",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export { Input };
