import './BottomNavBar.css';

const PLACEHOLDER_COUNT = 5;

export default function BottomNavBar({
  items,
  activeId,
  onChange,
  className = '',
  ...props
}) {
  const navClasses = ['bottom-nav', className].filter(Boolean).join(' ');

  if (!items || items.length === 0) {
    return (
      <nav role="navigation" className={navClasses} {...props}>
        {Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => (
          <div key={i} className="bottom-nav__item bottom-nav__item--placeholder">
            <span className="bottom-nav__icon bottom-nav__icon--placeholder" />
            <span className="bottom-nav__label bottom-nav__label--placeholder" />
          </div>
        ))}
      </nav>
    );
  }

  return (
    <nav role="navigation" className={navClasses} {...props}>
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <button
            key={item.id}
            type="button"
            className={[
              'bottom-nav__item',
              isActive ? 'bottom-nav__item--active' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() => onChange?.(item.id)}
            aria-label={item.label}
            aria-current={isActive ? 'page' : undefined}
          >
            <span className="bottom-nav__icon">{item.icon}</span>
            <span className="bottom-nav__label">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
