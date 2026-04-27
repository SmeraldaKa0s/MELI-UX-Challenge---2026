import './TabBar.css';

export default function TabBar({
  tabs = [],
  activeId,
  onChange,
  theme = 'light',
  className = '',
  ...props
}) {
  const classes = [
    'tab-bar',
    theme === 'play' ? 'tab-bar--play' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div role="tablist" className={classes} {...props}>
      {tabs.map((tab) => {
        const isActive = tab.id === activeId;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            className={['tab-bar__tab', isActive ? 'tab-bar__tab--active' : ''].filter(Boolean).join(' ')}
            onClick={() => onChange?.(tab.id)}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
