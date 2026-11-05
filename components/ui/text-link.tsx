import * as React from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

export interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function TextLink({ href, children, className = "" }: TextLinkProps) {
  return (
    <Link href={href} className={`text-link group ${className}`.trim()}>
      <span className="text-link-label">{children}</span>
      <span className="text-link-icon">
        <ArrowUpRightIcon size={13} weight="bold" />
      </span>
    </Link>
  );
}
