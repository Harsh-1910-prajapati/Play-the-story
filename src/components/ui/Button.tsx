import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  href?: string;
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isLoading,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a880] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808] disabled:opacity-50 disabled:pointer-events-none uppercase text-xs";

    const variants = {
      primary:
        "bg-[#c5a880] text-[#080808] hover:bg-[#dfc8a5] hover:shadow-[0_0_20px_rgba(197,168,128,0.3)] active:scale-[0.98]",
      secondary:
        "bg-[#161616] text-[#fbf9f5] hover:bg-[#222222] border border-white/10 active:scale-[0.98]",
      outline:
        "bg-transparent text-[#fbf9f5] border border-[#c5a880]/40 hover:border-[#c5a880] hover:bg-[#c5a880]/10 active:scale-[0.98]",
      ghost:
        "bg-transparent text-[#fbf9f5] hover:text-[#c5a880] hover:bg-white/5",
      gold:
        "bg-gradient-to-r from-[#dfc8a5] via-[#c5a880] to-[#9e7f56] text-[#080808] font-semibold hover:brightness-110 shadow-lg active:scale-[0.98]",
    };

    const sizes = {
      sm: "h-9 px-4 py-2 tracking-wider",
      md: "h-11 px-6 py-2.5 tracking-widest",
      lg: "h-13 px-8 py-3.5 text-sm tracking-widest",
    };

    const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <Link href={href} className={combinedClassName}>
          {isLoading && (
            <svg
              className="mr-2 h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          )}
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
