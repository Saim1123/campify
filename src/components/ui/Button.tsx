import { type ButtonHTMLAttributes, forwardRef } from "react";
import { Loader2 } from "lucide-react";

import { cn } from "../../lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ 
  className, 
  variant = "primary", 
  size = "md", 
  isLoading, 
  children, 
  disabled,
  ...props 
}, ref) => {
  
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20",
    secondary: "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/20",
    outline: "border border-gray-700 bg-transparent hover:bg-gray-800 text-gray-100",
    ghost: "hover:bg-gray-800 text-gray-300 hover:text-white",
    link: "text-blue-400 underline-offset-4 hover:underline",
  };
  
  const sizes = {
    sm: "h-9 px-3 text-xs",
    md: "h-11 px-8 py-2 text-sm",
    lg: "h-14 px-8 text-base",
    icon: "h-10 w-10",
  };

  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
});

Button.displayName = "Button";

export { Button };
