import './OnboardingSalas.css';

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

export default function OnboardingSalas({ onBack, onNavigate }) {
  return (
    <div className="onboarding-salas">
      <div className="onboarding-salas__topbar">
        <button
          className="onboarding-salas__back-btn"
          type="button"
          onClick={onBack}
          aria-label="Volver"
        >
          <ArrowLeftIcon />
        </button>
      </div>

      <main className="onboarding-salas__main">
        <h1 className="onboarding-salas__title">
          Disfrutá los beneficios de las salas
        </h1>

        <div className="onboarding-salas__image-container">
          <img
            className="onboarding-salas__image"
            src="/avatares-actualizados.png"
            alt=""
          />
        </div>

        <div className="onboarding-salas__benefits">
          <div className="onboarding-salas__benefit">
            <h2 className="onboarding-salas__benefit-title">
              Mirá lo que ven tus amigos
            </h2>
            <p className="onboarding-salas__benefit-body">
              Descubrí qué películas y series están viendo las personas de tu sala.
            </p>
          </div>

          <div className="onboarding-salas__benefit">
            <h2 className="onboarding-salas__benefit-title">
              Compartí y pedí recomendaciones
            </h2>
            <p className="onboarding-salas__benefit-body">
              ¿No saben qué mirar? ¡Pídanse una recomendación personalizada!
            </p>
          </div>
        </div>
      </main>

      <footer className="onboarding-salas__footer">
        <button
          className="onboarding-salas__cta"
          type="button"
          onClick={() => onNavigate('invitar-amigo')}
        >
          Continuar
        </button>
      </footer>
    </div>
  );
}
