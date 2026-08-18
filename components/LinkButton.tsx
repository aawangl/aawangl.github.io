import type { AnchorHTMLAttributes } from "react";

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary";
};

export function LinkButton({
  variant = "primary",
  className = "",
  ...props
}: LinkButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200";
  const styles =
    variant === "primary"
      ? "bg-foreground text-background hover:bg-accent"
      : "border border-border text-foreground hover:border-accent hover:text-accent";

  return <a className={`${base} ${styles} ${className}`} {...props} />;
}
