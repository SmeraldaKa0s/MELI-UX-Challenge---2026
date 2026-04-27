import "./SearchBox.css";

export default function SearchBox({ value, onChange, placeholder = "Buscar...", ...props }) {
  return (
    <div className="searchbox">
      <span className="searchbox__icon" aria-hidden="true">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.5" />
          <line
            x1="12.5"
            y1="12.5"
            x2="17"
            y2="17"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <input
        className="searchbox__input"
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}
