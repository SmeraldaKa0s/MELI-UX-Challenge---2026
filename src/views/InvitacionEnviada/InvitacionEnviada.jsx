import './InvitacionEnviada.css';

function FeatherIcon({ size = 24, stroke = 2, children, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

function CloseIcon() {
  return (
    <FeatherIcon size={24}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </FeatherIcon>
  );
}

function getInitials(name) {
  if (!name) return '';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    const first = parts[0][0] ?? '';
    return (first + first).toUpperCase();
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function InvitacionEnviada({ friend, onInviteAnother, onHome, onClose }) {
  const name = friend?.name ?? 'Roro';
  const phone = friend?.phone ?? '+549112252-7989';

  return (
    <div className="invitacion-enviada">
      <div className="invitacion-enviada__hero">
        <div className="invitacion-enviada__topbar">
          <button
            className="invitacion-enviada__close-btn"
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="invitacion-enviada__card">
          <h1 className="invitacion-enviada__title">Invitación enviada</h1>
          <p className="invitacion-enviada__subtitle">
            Le enviamos una invitación a {name}.<br />
            ¡Te avisaremos cuando la acepte!
          </p>
          <img
            className="invitacion-enviada__illustration"
            src="/sucess.png"
            alt=""
            draggable={false}
          />
        </div>
      </div>

      <div className="invitacion-enviada__content">
        <div className="invitacion-enviada__contact">
          <div className="invitacion-enviada__avatar">{getInitials(name)}</div>
          <div className="invitacion-enviada__contact-info">
            <p className="invitacion-enviada__contact-name">{name}</p>
            <p className="invitacion-enviada__contact-phone">{phone}</p>
            <p className="invitacion-enviada__contact-status">
              <span className="invitacion-enviada__status-dot" />
              Invitación pendiente
            </p>
          </div>
        </div>
      </div>

      <div className="invitacion-enviada__footer">
        <button
          className="invitacion-enviada__cta"
          type="button"
          onClick={onInviteAnother}
        >
          Invitar otro amigo
        </button>
        <button
          className="invitacion-enviada__link"
          type="button"
          onClick={onHome}
        >
          Ir al inicio
        </button>
      </div>
    </div>
  );
}
