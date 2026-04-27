import "./ProductImage.css";

export default function ProductImage({ src, alt, badge, loading = "lazy", ...props }) {
  return (
    <div className="product-image">
      <img
        className="product-image__img"
        src={src}
        alt={alt}
        loading={loading}
        {...props}
      />
      {badge && <div className="product-image__badge">{badge}</div>}
    </div>
  );
}
