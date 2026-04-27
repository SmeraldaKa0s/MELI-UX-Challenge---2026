import "./PlayCard.css";

export default function PlayCard({
  imageSrc,
  title,
  logoSrc,
  active = true,
  onClick,
  ...props
}) {
  const classes = [
    "play-card",
    active ? "play-card--active" : "play-card--inactive",
  ].join(" ");

  return (
    <div className={classes} onClick={onClick} role="button" tabIndex={0} {...props}>
      {imageSrc && (
        <img className="play-card__image" src={imageSrc} alt={title ?? ""} />
      )}
      <div className="play-card__overlay">
        {title && <h3 className="play-card__title">{title}</h3>}
      </div>
      {logoSrc && (
        <img className="play-card__logo" src={logoSrc} alt="" aria-hidden="true" />
      )}
    </div>
  );
}
