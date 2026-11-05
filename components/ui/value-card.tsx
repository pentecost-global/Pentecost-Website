import * as React from "react";
import { TextLink } from "@/components/ui/text-link";

export interface ValueCardProps {
  icon?: React.ReactNode;
  index?: string;
  title: string;
  copy: string;
  href?: string;
  linkLabel?: string;
  className?: string;
}

export function ValueCard({
  icon,
  index,
  title,
  copy,
  href,
  linkLabel,
  className = "",
}: ValueCardProps) {
  return (
    <article
      className={`value-card h-full group relative flex flex-col justify-between ${className}`.trim()}
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          {icon ? (
            <div className="value-card-icon inline-flex size-11 items-center justify-center rounded-sm bg-accent text-primary transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-primary group-hover:text-primary-foreground">
              {icon}
            </div>
          ) : null}
          {index ? (
            <span className="font-display text-xs font-bold tracking-widest text-muted-foreground/60">
              {index}
            </span>
          ) : null}
        </div>
        <h3 className="transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>
        <p>{copy}</p>
      </div>
      {href && linkLabel ? (
        <div className="mt-6 pt-2">
          <TextLink href={href}>{linkLabel}</TextLink>
        </div>
      ) : null}
    </article>
  );
}
