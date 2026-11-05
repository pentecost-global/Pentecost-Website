import * as React from "react";
import Link from "next/link";

export type ButtonVariant =
  | "movement"
  | "hero"
  | "heroOutline"
  | "paper"
  | "dark"
  | "default"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

export type ButtonSize = "default" | "sm" | "lg" | "icon";

const variantClassMap: Record<ButtonVariant, string> = {
  movement: "btn-base btn-movement",
  hero: "btn-base btn-hero",
  heroOutline: "btn-base btn-hero-outline",
  paper: "btn-base btn-paper",
  dark: "btn-base btn-dark",
  default: "btn-base btn-movement",
  outline: "btn-base btn-outline",
  secondary: "btn-base btn-secondary",
  ghost: "btn-base btn-ghost",
  link: "text-primary underline-offset-4 hover:underline inline-flex items-center gap-2 font-semibold text-sm",
};

const sizeClassMap: Record<ButtonSize, string> = {
  default: "h-10 px-5 text-xs",
  sm: "h-9 px-3.5 text-xs",
  lg: "h-12 px-7 text-[13px]",
  icon: "h-10 w-10 p-0",
};

export function getButtonClasses(
  variant: ButtonVariant = "default",
  size: ButtonSize = "default",
  className = ""
) {
  return [variantClassMap[variant], sizeClassMap[size], className]
    .filter(Boolean)
    .join(" ");
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "default",
      size = "default",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={getButtonClasses(variant, size, className)}
        {...props}
      >
        <span className="btn-content">{children}</span>
      </button>
    );
  }
);
Button.displayName = "Button";

export interface ButtonLinkProps
  extends React.ComponentPropsWithoutRef<typeof Link> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function ButtonLink({
  className = "",
  variant = "default",
  size = "default",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={getButtonClasses(variant, size, className)}
      {...props}
    >
      <span className="btn-content">{children}</span>
    </Link>
  );
}
