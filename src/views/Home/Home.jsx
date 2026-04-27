import { useState } from 'react';
import TabBar from '../../components/TabBar/TabBar';
import BottomNavBar from '../../components/BottomNavBar/BottomNavBar';
import Badge from '../../components/Badge/Badge';
import './Home.css';

const BANNER_HOME = '/banner-home.png';
const PRODUCT_IMAGES = {
  redmi: '/xiaomi-redmi.png',
  tv: '/xiaomi-tv.png',
};

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

function CameraIcon() {
  return (
    <FeatherIcon size={20}>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </FeatherIcon>
  );
}

function BellIcon() {
  return (
    <FeatherIcon size={22}>
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </FeatherIcon>
  );
}

function PinIcon() {
  return (
    <FeatherIcon size={14}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </FeatherIcon>
  );
}

function ChevronRightIcon({ size = 14 }) {
  return (
    <FeatherIcon size={size}>
      <polyline points="9 18 15 12 9 6" />
    </FeatherIcon>
  );
}

function HomeIcon() {
  return (
    <FeatherIcon>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </FeatherIcon>
  );
}

function HeartIcon() {
  return (
    <FeatherIcon>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </FeatherIcon>
  );
}

function CartIcon() {
  return (
    <FeatherIcon size={22}>
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </FeatherIcon>
  );
}

function ClipsIcon() {
  return (
    <FeatherIcon>
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </FeatherIcon>
  );
}

function MenuIcon() {
  return (
    <FeatherIcon>
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </FeatherIcon>
  );
}

const CATEGORY_TABS = [
  { id: 'todo', label: 'Todo' },
  { id: 'tecnologia', label: 'Tecnología' },
  { id: 'hogar', label: 'Hogar' },
  { id: 'electro', label: 'Electro' },
  { id: 'moda', label: 'Moda' },
  { id: 'belleza', label: 'Belleza' },
  { id: 'deportes', label: 'Deportes' },
];

const QUICK_LINKS = [
  { id: 'internacional', icon: '/avion.png', label: 'Internacional', tag: { text: 'NUEVO', tone: 'info' } },
  { id: 'ofertas', icon: '/ofertas.png', label: 'Ofertas' },
  { id: 'play', icon: '/pochoclos.png', label: 'Mercado Play', tag: { text: 'GRATIS', tone: 'success' } },
  { id: 'afiliados', icon: '/afiliados.png', label: 'Afiliados', tag: { text: 'GANA $', tone: 'success' } },
];

const PRODUCTS = [
  {
    id: 1,
    title: 'Xiaomi Redmi Note 11 (Snapdragon) Dual...',
    oldPrice: '$160.333',
    price: '$132.999',
    discount: '30% OFF',
    freeShipping: true,
    image: PRODUCT_IMAGES.redmi,
  },
  {
    id: 2,
    title: 'Xiaomi Redmi Note 11 (Snapdragon) Dual...',
    oldPrice: '$160.333',
    price: '$132.999',
    discount: '30% OFF',
    freeShipping: true,
    image: PRODUCT_IMAGES.tv,
  },
];

const NAV_ITEMS = [
  { id: 'inicio', label: 'Inicio', icon: <HomeIcon /> },
  { id: 'favoritos', label: 'Favoritos', icon: <HeartIcon /> },
  {
    id: 'carrito',
    label: 'Carrito',
    icon: (
      <span className="home__cart-fab" aria-hidden="true">
        <CartIcon />
      </span>
    ),
  },
  { id: 'clips', label: 'Clips', icon: <ClipsIcon /> },
  { id: 'mas', label: 'Más', icon: <MenuIcon /> },
];

export default function Home({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('todo');
  const [activeNav, setActiveNav] = useState('inicio');
  const [search, setSearch] = useState('');

  const handleQuickLink = (id) => {
    if (id === 'play') onNavigate?.('mercado-play');
  };

  return (
    <div className="home">
      <header className="home__header">
        <div className="home__header-row">
          <div className="home__avatar" aria-label="Avatar">AL</div>
          <div className="home__search">
            <input
              type="search"
              className="home__search-input"
              placeholder="Buscar en Mercado Libre"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="home__search-camera" aria-label="Buscar con cámara" type="button">
              <CameraIcon />
            </button>
          </div>
          <button className="home__bell" aria-label="Notificaciones (3 nuevas)" type="button">
            <BellIcon />
            <span className="home__bell-badge">3</span>
          </button>
        </div>
        <button className="home__address" type="button">
          <PinIcon />
          <span className="home__address-text">Miñones 2177</span>
          <ChevronRightIcon />
        </button>
      </header>

      <TabBar
        tabs={CATEGORY_TABS}
        activeId={activeTab}
        onChange={setActiveTab}
        className="home__tabs"
      />

      <main className="home__main">
        <a className="home__promo" href="#" aria-label="Ofertazos para tu vehículo: hasta 40% off y 9 cuotas sin interés">
          <img className="home__promo-img" src={BANNER_HOME} alt="Ofertazos para tu vehículo. Hasta 40% off. Hasta 9 cuotas sin interés." />
        </a>

        <a className="home__meli-plus" href="#" aria-label="Suscribirse a Meli+: viví Mercado Libre como un experto por $3.490">
          <img className="home__meli-plus-img" src="/banner-meli-plus.png" alt="Meli+: viví Mercado Libre como un experto por $3.490" />
        </a>

        <section className="home__quick-links" aria-label="Accesos rápidos">
          {QUICK_LINKS.map((link) => (
            <button
              key={link.id}
              className="home__quick-link"
              type="button"
              onClick={() => handleQuickLink(link.id)}
            >
              <img className="home__quick-link-icon" src={link.icon} alt="" />
              {link.tag ? (
                <Badge variant="pill" tone={link.tag.tone} className="home__quick-tag">
                  {link.tag.text}
                </Badge>
              ) : (
                <span className="home__quick-tag-spacer" aria-hidden="true" />
              )}
              <span className="home__quick-link-label">{link.label}</span>
            </button>
          ))}
        </section>

        <section className="home__grid" aria-label="Productos">
          {PRODUCTS.map((p) => (
            <article key={p.id} className="home__product">
              <div className="home__product-image">
                <img src={p.image} alt={p.title} loading="lazy" />
              </div>
              <h3 className="home__product-title">{p.title}</h3>
              <div className="home__product-old-price">{p.oldPrice}</div>
              <div className="home__product-price-row">
                <span className="home__product-price">{p.price}</span>
                <Badge variant="discount">{p.discount}</Badge>
              </div>
              {p.freeShipping && (
                <div className="home__product-shipping">Envío gratis</div>
              )}
            </article>
          ))}
        </section>
      </main>

      <BottomNavBar
        items={NAV_ITEMS}
        activeId={activeNav}
        onChange={setActiveNav}
        className="home__bottom-nav"
      />
    </div>
  );
}
