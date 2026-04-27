import "./Badge.css";

export default function Badge({ variant = "pill", tone, status, className = "", children, ...props }) {
  const classes = [
    "badge",
    `badge--${variant}`,
    variant === "pill" && tone ? `badge--tone-${tone}` : "",
    variant === "status" && status ? `badge--status-${status}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} {...props}>
      {variant === "status" && (
        <span
          className="badge__dot"
          aria-label={typeof children === "string" ? children : undefined}
          aria-hidden={typeof children !== "string"}
        />
      )}
      {children}
    </span>
  );
}
