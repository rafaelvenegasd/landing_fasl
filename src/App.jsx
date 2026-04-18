import { useState } from "react";
import {
  HandHeart,
  HeartHandshake,
  House,
  Menu,
  Phone,
  Users,
  X,
  Mail,
  MapPin,
  Facebook,
  MessageCircle
} from "lucide-react";
import "./styles/App.css";

const logoCompleto = "/img/Logo_Fundacion_Amar_Sin_Limites_transparente.png";
const logoIsotipo = "/img/Logo_symbol_Fundacion_Amar_Sin_Limites_transparente.png";
const heroImage = "/img/470183779_122099224262680993_2716695833736413600_n.jpg";

const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#quienes-somos", label: "Quiénes somos" },
  { href: "#labor", label: "Nuestra labor" },
  { href: "#como-ayudar", label: "Cómo ayudar" },
  { href: "#contacto", label: "Contacto" }
];

const laborItems = [
  {
    icon: House,
    title: "Apoyo a familias",
    text: "Acompañamos a familias en situaciones difíciles con orientación, escucha activa y conexión con redes de apoyo, para que ninguna persona enfrente sus desafíos sola."
  },
  {
    icon: Users,
    title: "Inclusión y acompañamiento",
    text: "Creamos espacios donde todas las personas son bienvenidas sin condiciones. Porque la inclusión no es un favor, es un derecho que trabajamos cada día para hacer realidad."
  },
  {
    icon: HeartHandshake,
    title: "Actividades solidarias",
    text: "Organizamos jornadas y encuentros comunitarios que unen voluntades y generan un impacto real y cercano en la vida de quienes participan."
  },
  {
    icon: HandHeart,
    title: "Trabajo comunitario",
    text: "Promovemos la participación activa de la comunidad, porque los cambios más duraderos son los que se construyen juntos, desde adentro y con el corazón."
  }
];

const facebookUrl = "https://www.facebook.com/fundacionamarsinlimites";
const phoneDisplay = "0983394325";
const phoneInternational = "593983394325";
const mailAddress = "amarsinlim@gmail.com";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#inicio" className="brand" aria-label="Ir al inicio">
            <img src={logoIsotipo} alt="Isotipo de Fundación Amar Sin Límites" className="brand-logo" />
            <span className="brand-name">Fundación Amar Sin Límites</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className={`site-nav ${isMenuOpen ? "open" : ""}`} aria-label="Navegación principal">
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={closeMenu}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              className="btn btn-primary nav-cta"
              href={facebookUrl}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              Síguenos en Facebook
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero section-padding">
          <div className="container hero-grid">
            <div className="hero-content fade-in-up">
              <img
                src={logoCompleto}
                alt="Logo de Fundación Amar Sin Límites"
                className="hero-logo"
              />
              <h1>Uniendo corazones,<br />rompiendo barreras</h1>
              <p className="hero-text">
                Desde Guayaquil, trabajamos junto a personas y familias para construir
                comunidades más solidarias, inclusivas y llenas de esperanza.
                Creemos que el amor, cuando se convierte en acción, puede cambiar vidas.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary btn-lg" href={facebookUrl} target="_blank" rel="noreferrer">
                  <Facebook size={18} />
                  Síguenos en Facebook
                </a>
                <a className="btn btn-outline" href={`mailto:${mailAddress}`}>
                  Escríbenos
                </a>
              </div>
            </div>
            <div className="hero-media fade-in-up delay-1">
              <img
                src={heroImage}
                alt="Miembros de la fundación en una actividad comunitaria"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section id="quienes-somos" className="section-padding section-light">
          <div className="container split">
            <div className="split-title">
              <h2>Quiénes somos</h2>
            </div>
            <div className="split-content">
              {/* Este contenido puede actualizarse con el texto oficial del estatuto de la fundación. */}
              <p>
                Fundación Amar Sin Límites nació del deseo de hacer algo concreto por quienes
                más lo necesitan. Somos un grupo de personas comprometidas con el bienestar social,
                que creemos en el poder del amor, la solidaridad y el trabajo colectivo para
                transformar realidades.
              </p>
              <p>
                Nos mueve la convicción de que cada persona tiene dignidad y merece ser vista,
                escuchada y acompañada. Por eso trabajamos desde la cercanía, con respeto,
                sin condiciones y sin rendirse.
              </p>
            </div>
          </div>
        </section>

        <section id="labor" className="section-padding">
          <div className="container">
            <h2 className="section-title">Nuestra labor</h2>
            <p className="section-subtitle">
              Desde distintos frentes, buscamos un mismo objetivo: que ninguna persona quede atrás.
            </p>

            <div className="cards-grid">
              {laborItems.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="card fade-in-up">
                    <div className="card-icon" aria-hidden="true">
                      <Icon size={24} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="como-ayudar" className="section-padding section-light">
          <div className="container">
            <h2 className="section-title">Cómo ayudar</h2>
            <div className="help-grid">
              <article className="help-item">
                <div className="help-num" aria-hidden="true">01</div>
                <h3>Comparte nuestra misión</h3>
                <p>
                  Una publicación, un mensaje o una conversación puede abrir una puerta para
                  alguien que lo necesita. Tu voz tiene más alcance del que imaginas.
                </p>
              </article>
              <article className="help-item">
                <div className="help-num" aria-hidden="true">02</div>
                <h3>Escríbenos y únete</h3>
                <p>
                  Si tienes tiempo, energía o ideas para aportar, nos encantaría conocerte.
                  Aquí hay espacio para todas las formas de colaborar.
                </p>
              </article>
              <article className="help-item">
                <div className="help-num" aria-hidden="true">03</div>
                <h3>Síguenos en Facebook</h3>
                <p>
                  Nuestra página es el lugar donde compartimos lo que hacemos, lo que soñamos
                  y las historias que nos inspiran. ¡Acompáñanos!
                </p>
              </article>
            </div>
            <a className="btn btn-primary btn-lg cta-center" href={facebookUrl} target="_blank" rel="noreferrer">
              <Facebook size={18} />
              Visitar nuestra página
            </a>
          </div>
        </section>

        <section id="contacto" className="section-padding contact-section">
          <div className="container">
            <h2 className="section-title">Contacto</h2>
            <div className="contact-grid">
              <article className="contact-card">
                <MapPin size={20} aria-hidden="true" />
                <div>
                  <h3>Dirección</h3>
                  <p>Guayaquil - Ecuador</p>
                </div>
              </article>
              <article className="contact-card">
                <Phone size={20} aria-hidden="true" />
                <div>
                  <h3>Teléfono</h3>
                  <a href={`tel:${phoneDisplay}`}>{phoneDisplay}</a>
                </div>
              </article>
              <article className="contact-card">
                <Mail size={20} aria-hidden="true" />
                <div>
                  <h3>Correo</h3>
                  <a href={`mailto:${mailAddress}`}>{mailAddress}</a>
                </div>
              </article>
              <article className="contact-card">
                <Facebook size={20} aria-hidden="true" />
                <div>
                  <h3>Facebook</h3>
                  <a href={facebookUrl} target="_blank" rel="noreferrer">
                    Fundación Amar Sin Límites
                  </a>
                </div>
              </article>
            </div>

            <div className="contact-actions">
              <a className="btn btn-wa" href={`https://wa.me/${phoneInternational}`} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                Escribir por WhatsApp
              </a>
              <a className="btn btn-primary btn-lg" href={`mailto:${mailAddress}`}>
                <Mail size={18} />
                Contáctanos por correo
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <img src={logoIsotipo} alt="Isotipo de Fundación Amar Sin Límites" />
            <div>
              <p className="footer-name">Fundación Amar Sin Límites</p>
              <p className="footer-slogan">Uniendo corazones, rompiendo barreras</p>
            </div>
          </div>

          <div className="footer-contact">
            <p>Guayaquil - Ecuador</p>
            <a href={`tel:${phoneDisplay}`}>{phoneDisplay}</a>
            <a href={`mailto:${mailAddress}`}>{mailAddress}</a>
            <a href={facebookUrl} target="_blank" rel="noreferrer">
              Facebook oficial
            </a>
          </div>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Fundación Amar Sin Límites. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default App;
