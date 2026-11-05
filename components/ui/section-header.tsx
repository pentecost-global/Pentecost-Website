import * as React from "react";

export interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  isSectionLabel?: boolean;
}

export function Eyebrow({
  children,
  className = "",
  isSectionLabel = true,
}: EyebrowProps) {
  return (
    <p
      className={`eyebrow ${isSectionLabel ? "section-label" : ""} ${className}`.trim()}
    >
      {children}
    </p>
  );
}

