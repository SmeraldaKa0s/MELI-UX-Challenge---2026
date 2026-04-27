import './TopAppBar.css';

function LocationPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 1.5C5.515 1.5 3.5 3.515 3.5 6c0 3.375 4.5 8.5 4.5 8.5s4.5-5.125 4.5-8.5c0-2.485-2.015-4.5-4.5-4.5Zm0 6.125A1.625 1.625 0 1 1 8 4.25a1.625 1.625 0 0 1 0 3.375Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TopAppBar({
  theme = 'light',
  leading,
  title,
  trailing,
  addressRow,
  className = '',
  ...props
}) {
  const classes = [
    'top-app-bar',
    theme === 'play' ? 'top-app-bar--play' : '',
    addressRow ? 'top-app-bar--with-address' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={classes} {...props}>
      <div className="top-app-bar__row">
        <div className="top-app-bar__leading">{leading}</div>
        {title && <div className="top-app-bar__title">{title}</div>}
        <div className="top-app-bar__trailing">{trailing}</div>
      </div>

      {addressRow && (
        <button
          className="top-app-bar__address"
          onClick={addressRow.onClick}
          type="button"
        >
          <LocationPinIcon />
          <span className="top-app-bar__address-text">{addressRow.address}</span>
          <ChevronDownIcon />
        </button>
      )}
    </header>
  );
}
