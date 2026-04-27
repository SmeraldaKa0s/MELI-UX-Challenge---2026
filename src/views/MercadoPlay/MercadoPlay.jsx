import { useCallback, useEffect, useRef, useState } from 'react';
import TabBar from '../../components/TabBar/TabBar';
import './MercadoPlay.css';

function useDragScroll() {
  const cleanupRef = useRef(null);
  const elRef = useRef(null);

  const setRef = useCallback((el) => {
    if (cleanupRef.current) {
      cleanupRef.current();
      cleanupRef.current = null;
    }
    elRef.current = el;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;

    const onPointerDown = (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      isDown = true;
      moved = false;
      startX = e.clientX;
      startScroll = el.scrollLeft;
      el.classList.add('is-dragging');
      el.setPointerCapture?.(e.pointerId);
    };
    const onPointerMove = (e) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      el.scrollLeft = startScroll - dx;
    };
    const endDrag = (e) => {
      if (!isDown) return;
      isDown = false;
      el.classList.remove('is-dragging');
      el.releasePointerCapture?.(e.pointerId);
    };
    const onClickCapture = (e) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup', endDrag);
    el.addEventListener('pointercancel', endDrag);
    el.addEventListener('click', onClickCapture, true);

    cleanupRef.current = () => {
      el.removeEventListener('pointerdown', onPointerDown);
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerup', endDrag);
      el.removeEventListener('pointercancel', endDrag);
      el.removeEventListener('click', onClickCapture, true);
    };
  }, []);

  return [setRef, elRef];
}

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
    <FeatherIcon size={22}>
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </FeatherIcon>
  );
}

function CastIcon() {
  return (
    <FeatherIcon size={20}>
      <path d="M2 16.1A5 5 0 0 1 5.9 20" />
      <path d="M2 12.05A9 9 0 0 1 9.95 20" />
      <path d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
      <line x1="2" y1="20" x2="2.01" y2="20" />
    </FeatherIcon>
  );
}

function SettingsIcon() {
  return (
    <FeatherIcon size={20}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </FeatherIcon>
  );
}

function SearchIcon() {
  return (
    <FeatherIcon size={18}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </FeatherIcon>
  );
}

function PlayCircleIcon() {
  return (
    <FeatherIcon size={20} stroke={1.8}>
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
    </FeatherIcon>
  );
}

const PLAY_TABS = [
  { id: 'para-vos', label: 'Para vos' },
  { id: 'peliculas', label: 'Películas' },
  { id: 'series', label: 'Series' },
  { id: 'infantil', label: 'Infantil' },
  { id: 'clips', label: 'Clips' },
];

const FEATURED_FILMS = [
  { id: 'novia', title: 'La Novia', image: '/la-novia.png' },
  { id: 'hielo', title: 'La era del hielo', image: '/la-era-del-hielo.png' },
];

function getInitials(name) {
  if (!name) return '';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    const first = parts[0][0] ?? '';
    return (first + first).toUpperCase();
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function MercadoPlay({ onBack, onNavigate, friend }) {
  const [phase, setPhase] = useState('loading');
  const [activeTab, setActiveTab] = useState('para-vos');
  const [filmsRef] = useDragScroll();

  useEffect(() => {
    const t = setTimeout(() => setPhase('home'), 1600);
    return () => clearTimeout(t);
  }, []);

  if (phase === 'loading') {
    return (
      <div className="play-loading" role="status" aria-label="Cargando Mercado Play">
        <img className="play-loading__img" src="/loading-mercado-play.png" alt="" />
        <span className="play-loading__spinner" />
      </div>
    );
  }

  return (
    <div className="play">
      <header className="play__header">
        <div className="play__header-row">
          <button className="play__icon-btn" onClick={onBack} aria-label="Volver" type="button">
            <ArrowLeftIcon />
          </button>
          <h1 className="play__title">Mercado Play</h1>
          <button className="play__icon-btn" aria-label="Transmitir" type="button">
            <CastIcon />
          </button>
          <button className="play__icon-btn" aria-label="Ajustes" type="button">
            <SettingsIcon />
          </button>
        </div>
      </header>

      <div className="play__search-row">
        <label className="play__search">
          <SearchIcon />
          <input className="play__search-input" type="search" placeholder="Buscar..." />
        </label>
        <button className="play__tv" type="button">
          <PlayCircleIcon />
          <span>MIRAR EN TV</span>
        </button>
      </div>

      <TabBar
        tabs={PLAY_TABS}
        activeId={activeTab}
        onChange={setActiveTab}
        className="play__tabs"
      />

      <main className="play__main">
        <section className="play__carousel-section" aria-label="Destacados">
          <img
            className="play__carousel-static"
            src="/carousel-static.png"
            alt="Disfrutala sin pausas"
            draggable={false}
          />
        </section>

        <section className="play__section" aria-label="Tus salas">
          <h2 className="play__section-title">Tus salas</h2>
          {friend ? (
            <div className="play__salas-row">
              <div className="play__friend-card">
                <div className="play__friend-avatar">{getInitials(friend.name)}</div>
                <p className="play__friend-name">{friend.name}</p>
                <p className="play__friend-status">
                  <span className="play__friend-dot" />
                  Invitación pendiente
                </p>
              </div>
              <button
                className="play__invite-card"
                type="button"
                onClick={() => onNavigate?.('invitar-amigo')}
              >
                <img
                  className="play__invite-img"
                  src="/pibe-pochoclo.png"
                  alt=""
                  draggable={false}
                />
                <span className="play__invite-badge">NUEVO</span>
                <span className="play__invite-label">Invitar</span>
              </button>
            </div>
          ) : (
            <a className="play__salas" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('onboarding-salas'); }}>
              <div className="play__salas-text">
                <p className="play__salas-title">
                  COMPARTÍ CON TUS AMIGOS TODO<br />LO QUE MIRÁS
                </p>
                <p className="play__salas-sub">Empezá a usar salas hoy</p>
              </div>
              <img className="play__salas-img" src="/tus-salas.png" alt="" />
            </a>
          )}
        </section>

        <section className="play__section" aria-label="Películas destacadas">
          <h2 className="play__section-title">Películas destacadas</h2>
          <div className="play__films" ref={filmsRef}>
            {FEATURED_FILMS.map((film) => (
              <a key={film.id} className="play__film" href="#">
                <img className="play__film-img" src={film.image} alt={film.title} draggable={false} />
                <span className="play__film-title">{film.title}</span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
