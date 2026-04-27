import "./PlayCarousel.css";
import { Children } from "react";

export default function PlayCarousel({
  title,
  subtitle,
  dark = false,
  children,
  ...props
}) {
  const sectionClass = [
    "play-carousel",
    dark ? "play-carousel--dark" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClass} {...props}>
      {(title || subtitle) && (
        <div className="play-carousel__header">
          <div>
            {title && <h2 className="play-carousel__title">{title}</h2>}
            {subtitle && <p className="play-carousel__subtitle">{subtitle}</p>}
          </div>
        </div>
      )}
      <div className="play-carousel__track" role="region" aria-label={title}>
        {Children.map(children, (child, i) => (
          <div key={i} className="play-carousel__item">
            {child}
          </div>
        ))}
      </div>
    </section>
  );
}
