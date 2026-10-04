import { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'naval' | 'detailing' | 'inox'>('naval');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* =========================
           NAVBAR
      ========================= */}
      <nav className="navbar">
        <div className="nav-container">
          <a
            href="#inicio"
            className="logo-container"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('inicio');
            }}
          >
            {/* Logotipo oficial tal cual proporcionado */}
            <img
              src="/42df7255-e019-4713-93a4-20979321cb60.png"
              alt="Tapicería Náutica Deluxe"
              className="logo-img"
              referrerPolicy="no-referrer"
            />
            <div className="logo-text">
              TAPICERÍA <span>NÁUTICA DELUXE</span>
            </div>
          </a>

          <ul className="nav-links">
            <li>
              <a
                href="#inicio"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('inicio');
                }}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('servicios');
                }}
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#galeria"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('galeria');
                }}
              >
                Galería
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('contacto');
                }}
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* =========================
           INICIO
      ========================= */}
      <section className="hero" id="inicio">
        <div className="hero-content">
          <div className="hero-badge">REFIT • MARINE • SERVICES</div>
          <h1>
            Tapicería Náutica <span>Deluxe</span>
          </h1>
          <p>
            Soluciones profesionales para embarcaciones, desde tapicería y detailing hasta trabajos en acero inoxidable y soldadura.
          </p>
          <div className="hero-buttons">
            <a
              className="btn btn-primary"
              href="https://wa.me/message/A4B2NZO74WWHE1"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              className="btn btn-outline"
              href="#servicios"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('servicios');
              }}
            >
              Ver servicios
            </a>
          </div>
        </div>
      </section>

      {/* =========================
           SERVICIOS
      ========================= */}
      <section className="section services-section" id="servicios">
        <div className="container">
          <div className="section-title">
            <div className="small">Nuestros servicios</div>
            <h2>Soluciones para tu embarcación</h2>
            <p>Selecciona uno de nuestros servicios para conocer más sobre lo que ofrecemos.</p>
          </div>

          <div className="service-tabs">
            <button
              type="button"
              className={`service-tab ${activeTab === 'naval' ? 'active' : ''}`}
              onClick={() => setActiveTab('naval')}
            >
              ⚓ Tapicería Naval
            </button>
            <button
              type="button"
              className={`service-tab ${activeTab === 'detailing' ? 'active' : ''}`}
              onClick={() => setActiveTab('detailing')}
            >
              ✦ Detailing
            </button>
            <button
              type="button"
              className={`service-tab ${activeTab === 'inox' ? 'active' : ''}`}
              onClick={() => setActiveTab('inox')}
            >
              ⚙ Acero Inoxidable &amp; Soldadura
            </button>
          </div>

          {/* PESTAÑA 1 */}
          <div className={`service-panel ${activeTab === 'naval' ? 'active' : ''}`} id="naval">
            <div className="service-box">
              <img
                className="service-image"
                src="/WhatsApp Image 2026-10-03 at 4.33.47 PM (1).jpeg"
                alt="Tapicería naval"
                referrerPolicy="no-referrer"
              />
              <div className="service-info">
                <h3>Tapicería Naval</h3>
                <p>
                  Renovamos y transformamos los espacios interiores y exteriores de tu embarcación con acabados profesionales y materiales adecuados para el ambiente marino.
                </p>
                <ul className="service-list">
                  <li>Tapizado de asientos y cojines</li>
                  <li>Restauración de interiores</li>
                  <li>Fabricación y renovación de cojinería</li>
                  <li>Acabados para áreas exteriores</li>
                  <li>Trabajos personalizados</li>
                </ul>
                <a
                  className="btn btn-primary"
                  href="https://wa.me/message/A4B2NZO74WWHE1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar cotización
                </a>
              </div>
            </div>
          </div>

          {/* PESTAÑA 2 */}
          <div className={`service-panel ${activeTab === 'detailing' ? 'active' : ''}`} id="detailing">
            <div className="service-box">
              <img
                className="service-image"
                src="/WhatsApp Image 2026-10-03 at 4.33.44 PM (1).jpeg"
                alt="Detailing náutico"
                referrerPolicy="no-referrer"
              />
              <div className="service-info">
                <h3>Detailing</h3>
                <p>
                  Cuidado y restauración estética de tu embarcación para mantenerla limpia, protegida y con una apariencia impecable.
                </p>
                <ul className="service-list">
                  <li>Limpieza profunda</li>
                  <li>Detallado interior y exterior</li>
                  <li>Pulido y acabado</li>
                  <li>Tratamiento de superficies</li>
                  <li>Mantenimiento estético</li>
                </ul>
                <a
                  className="btn btn-primary"
                  href="https://wa.me/message/A4B2NZO74WWHE1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar cotización
                </a>
              </div>
            </div>
          </div>

          {/* PESTAÑA 3 */}
          <div className={`service-panel ${activeTab === 'inox' ? 'active' : ''}`} id="inox">
            <div className="service-box">
              <img
                className="service-image"
                src="/WhatsApp Image 2026-10-03 at 4.33.53 PM (2).jpeg"
                alt="Acero inoxidable y soldadura"
                referrerPolicy="no-referrer"
              />
              <div className="service-info">
                <h3>Acero Inoxidable &amp; Soldadura</h3>
                <p>
                  Fabricación, reparación y trabajos especializados en acero inoxidable y soldadura para diferentes necesidades de tu embarcación.
                </p>
                <ul className="service-list">
                  <li>Trabajos en acero inoxidable</li>
                  <li>Soldadura</li>
                  <li>Reparación de estructuras</li>
                  <li>Fabricación de piezas</li>
                  <li>Trabajos personalizados</li>
                </ul>
                <a
                  className="btn btn-primary"
                  href="https://wa.me/message/A4B2NZO74WWHE1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar cotización
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
           GALERÍA
      ========================= */}
      <section className="section" id="galeria">
        <div className="container">
          <div className="section-title">
            <div className="small">Nuestro trabajo</div>
            <h2>Galería</h2>
            <p>Algunos ejemplos de trabajos y acabados náuticos.</p>
          </div>

          <div className="gallery">
            <div className="gallery-item">
              <img
                src="/WhatsApp Image 2026-10-03 at 4.33.47 PM (1).jpeg"
                alt="Tapicería Náutica"
                referrerPolicy="no-referrer"
              />
              <div className="gallery-overlay">Tapicería Náutica</div>
            </div>
            <div className="gallery-item">
              <img
                src="/WhatsApp Image 2026-10-03 at 4.33.44 PM (1).jpeg"
                alt="Embarcación"
                referrerPolicy="no-referrer"
              />
              <div className="gallery-overlay">Detailing</div>
            </div>
            <div className="gallery-item">
              <img
                src="/WhatsApp Image 2026-10-03 at 4.33.48 PM.jpeg"
                alt="Embarcación náutica"
                referrerPolicy="no-referrer"
              />
              <div className="gallery-overlay">Marine Refit</div>
            </div>
            <div className="gallery-item">
              <img
                src="/WhatsApp Image 2026-10-03 at 4.33.47 PM.jpeg"
                alt="Yate"
                referrerPolicy="no-referrer"
              />
              <div className="gallery-overlay">Servicios Náuticos</div>
            </div>
            <div className="gallery-item">
              <img
                src="/WhatsApp Image 2026-10-03 at 4.33.50 PM (1).jpeg"
                alt="Trabajo marino"
                referrerPolicy="no-referrer"
              />
              <div className="gallery-overlay">Calidad y detalle</div>
            </div>
            <div className="gallery-item">
              <img
                src="/WhatsApp Image 2026-10-03 at 4.33.51 PM (1).jpeg"
                alt="Detailing de embarcación"
                referrerPolicy="no-referrer"
              />
              <div className="gallery-overlay">Detailing Náutico</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
           CONTACTO
      ========================= */}
      <section className="section contact-section" id="contacto">
        <div className="container">
          <div className="section-title">
            <div className="small">Contáctanos</div>
            <h2>Hablemos de tu proyecto</h2>
            <p>Escríbenos para solicitar información, consultar disponibilidad o pedir una cotización.</p>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <h3>Tapicería Náutica Deluxe</h3>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16v16H4z"></path>
                    <path d="m4 5 8 7 8-7"></path>
                  </svg>
                </div>
                <div>
                  <strong>Correo</strong>
                  <br />
                  <a href="mailto:deluxetapiceria0@gmail.com">deluxetapiceria0@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15.5a16 16 0 0 1-6.5-2.5l-3 3a16 16 0 0 1-6.5-6.5l3-3A16 16 0 0 1 5.5 0L3 3.5A2 2 0 0 1 5 1.5l3 1a2 2 0 0 1 1.2 1.1l1 2.4a2 2 0 0 1-.4 2.1L8.5 9.5a13 13 0 0 0 6 6l1.4-1.3a2 2 0 0 1 2.1-.4l2.4 1a2 2 0 0 1 1.1 1.2l1 3a2 2 0 0 1-2 2z"></path>
                  </svg>
                </div>
                <div>
                  <strong>WhatsApp</strong>
                  <br />
                  <a href="https://wa.me/message/A4B2NZO74WWHE1" target="_blank" rel="noopener noreferrer">
                    Escríbenos por WhatsApp
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="5"></rect>
                    <circle cx="12" cy="12" r="4"></circle>
                    <circle cx="17.5" cy="6.5" r="1"></circle>
                  </svg>
                </div>
                <div>
                  <strong>Instagram</strong>
                  <br />
                  <a
                    href="https://www.instagram.com/deluxemarine.refit?stkn=eWN4ZDRiMGVkamQz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @deluxemarine.refit
                  </a>
                </div>
              </div>

              <div className="contact-buttons">
                <a
                  className="social-btn whatsapp"
                  href="https://wa.me/message/A4B2NZO74WWHE1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
                <a
                  className="social-btn instagram"
                  href="https://www.instagram.com/deluxemarine.refit?stkn=eWN4ZDRiMGVkamQz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a className="social-btn email" href="mailto:deluxetapiceria0@gmail.com">
                  Correo
                </a>
              </div>
            </div>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps?q=8.9823889,-79.5198611&amp;z=16&amp;output=embed"
                loading="lazy"
                allowFullScreen
                title="Ubicación de Tapicería Náutica Deluxe"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
           FOOTER
      ========================= */}
      <footer>
        <img
          src="/42df7255-e019-4713-93a4-20979321cb60.png"
          alt="Tapicería Náutica Deluxe"
          className="logo-img"
          style={{ margin: '0 auto 16px', width: '56px', height: '56px' }}
          referrerPolicy="no-referrer"
        />
        <strong>Tapicería Náutica Deluxe</strong>
        <br />
        <br />
        Refit • Marine • Services
        <br />
        <br />
        © 2026 Todos los derechos reservados.
      </footer>

      {/* =========================
           WHATSAPP FLOTANTE
      ========================= */}
      <a
        className="whatsapp-float"
        href="https://wa.me/message/A4B2NZO74WWHE1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
          <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.8L.2 24l6.5-1.7a11.8 11.8 0 0 0 5.4 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.3-6.1-3.5-8.3zM12.1 21.5c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3.9 1 1-3.8-.2-.3a9.7 9.7 0 0 1-1.5-5.2c0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 6.9 2.9 1.8 1.8 2.9 4.3 2.9 6.9-.1 5.4-4.5 9.8-10 9.8zm5.4-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.8-1.8-2.1-.2-.3 0-.5.2-.7.2-.2.3-.3.5-.5.2-.2.2-.3.3-.5.1-.2.1-.4 0-.6-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.1 3.1 1.3 3.3c.2.2 2.2 3.4 5.4 4.7.8.3 1.4.5 1.9.6.8.3 1.5.2 2.1.1.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3z" />
        </svg>
      </a>
    </div>
  );
}
