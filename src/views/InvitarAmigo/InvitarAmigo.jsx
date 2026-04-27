import { useState } from 'react';
import './InvitarAmigo.css';

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

function ArrowLeftIcon() {
  return (
    <FeatherIcon size={24}>
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </FeatherIcon>
  );
}

function PhoneIcon() {
  return (
    <FeatherIcon size={20}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </FeatherIcon>
  );
}

function PlayCircleIcon() {
  return (
    <FeatherIcon size={24}>
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
    </FeatherIcon>
  );
}

function HeartIcon() {
  return (
    <FeatherIcon size={24}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </FeatherIcon>
  );
}

function SendIcon() {
  return (
    <FeatherIcon size={24}>
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </FeatherIcon>
  );
}

export default function InvitarAmigo({ onBack, onSubmit }) {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  const fill = () => {
    setPhone('+549112252-7989');
    setName('Roro');
  };

  const filled = phone !== '' && name !== '';

  const handleSubmit = () => {
    if (!filled) return;
    onSubmit?.({ phone, name });
  };

  return (
    <div className="invitar-amigo">
      <div className="invitar-amigo__topbar">
        <button
          className="invitar-amigo__back-btn"
          type="button"
          onClick={onBack}
          aria-label="Volver"
        >
          <ArrowLeftIcon />
        </button>
      </div>

      <div className="invitar-amigo__content">
        <h1 className="invitar-amigo__title">Invitá a un amigo</h1>
        <p className="invitar-amigo__subtitle">
          Agrega a un amigo para que compartan el contenido que miran.
        </p>

        <div className="invitar-amigo__form">
          <div className="invitar-amigo__field-group">
            <div className="invitar-amigo__field">
              <input
                className="invitar-amigo__field-input"
                type="tel"
                placeholder="Ingresa el teléfono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onFocus={fill}
              />
              <span className="invitar-amigo__field-icon">
                <PhoneIcon />
              </span>
            </div>
            <p className="invitar-amigo__field-helper">
              Tiene que tener una cuenta activa en Mercado Libre.
            </p>
          </div>

          <div className="invitar-amigo__field-group">
            <div className="invitar-amigo__field invitar-amigo__field--no-icon">
              <input
                className="invitar-amigo__field-input"
                type="text"
                placeholder="Nombre de tu amigo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={fill}
              />
            </div>
            <p className="invitar-amigo__field-helper">
              Esto lo vas a ver solo vos.
            </p>
          </div>
        </div>

        <div className="invitar-amigo__benefits">
          <h2 className="invitar-amigo__benefits-heading">¿Qué van a ver?</h2>

          <ul className="invitar-amigo__benefits-list">
            <li className="invitar-amigo__benefit">
              <span className="invitar-amigo__benefit-icon">
                <PlayCircleIcon />
              </span>
              <span className="invitar-amigo__benefit-text">
                Van a poder enterarse el contenido que están viendo.
              </span>
            </li>
            <li className="invitar-amigo__benefit">
              <span className="invitar-amigo__benefit-icon">
                <HeartIcon />
              </span>
              <span className="invitar-amigo__benefit-text">
                Van a poder saber qué es lo que les gustó.
              </span>
            </li>
            <li className="invitar-amigo__benefit">
              <span className="invitar-amigo__benefit-icon">
                <SendIcon />
              </span>
              <span className="invitar-amigo__benefit-text">
                Tener siempre al alcance recomendaciones.
              </span>
            </li>
          </ul>
        </div>

        <div className="invitar-amigo__footer">
          <button
            className={`invitar-amigo__submit ${filled ? 'invitar-amigo__submit--enabled' : ''}`}
            type="button"
            disabled={!filled}
            aria-disabled={!filled}
            onClick={handleSubmit}
          >
            Enviar invitación
          </button>
        </div>
      </div>
    </div>
  );
}
