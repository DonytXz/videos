import Link from "next/link";
import PropertyScene from "./components/property-demo/PropertyScene";
import { sampleBuyers, propertyOptions } from "@/lib/property-demo";

export default function Home() {
  return (
    <main className="tour-shell">
      <nav className="tour-nav" aria-label="Navegación principal">
        <Link href="/" className="tour-brand" aria-label="Deepia, inicio">
          <span aria-hidden="true">d.</span> deepia
        </Link>
        <div className="tour-nav-links">
          <a href="#como-funciona">Cómo funciona</a>
          <Link href="/auth/login">Iniciar sesión</Link>
        </div>
        <Link
          href="/video?mode=showcase"
          className="tour-button tour-button-small"
        >
          Probar demo <span aria-hidden="true">↗</span>
        </Link>
      </nav>
      <section className="tour-hero tour-container">
        <div className="tour-hero-copy">
          <p className="tour-eyebrow">
            <span className="tour-dot" /> DEEPIA PARA INMOBILIARIAS
          </p>
          <h1>
            Una grabación.
            <br />
            Un recorrido personal para <em>cada comprador.</em>
          </h1>
          <p className="tour-lead">
            Convierte el interés por una propiedad en el siguiente paso: una
            visita. Un nombre, un hogar y un mensaje que conectan.
          </p>
          <div className="tour-actions">
            <Link href="/video?mode=showcase" className="tour-button">
              Ver mi ejemplo <span aria-hidden="true">→</span>
            </Link>
            <a href="#como-funciona" className="tour-text-link">
              Así funciona
            </a>
          </div>
          <p className="tour-muted tour-small">
            Sin registro · Tres compradores ficticios · Explora a tu ritmo
          </p>
        </div>
        <div className="tour-hero-preview">
          <div className="tour-preview-top">
            <span>
              <span className="tour-dot" /> RECORRIDO PARA ANA
            </span>
            <span>01 / 03</span>
          </div>
          <Link
            href="/video?mode=showcase"
            className="tour-hero-art"
            aria-label="Abrir la demo de recorridos personalizados"
          >
            <PropertyScene />
            <span className="tour-art-label">ROMA NORTE · 2 RECÁMARAS</span>
            <span className="tour-play-circle" aria-hidden="true">
              ▶
            </span>
            <span className="tour-hero-caption">
              <small>UN HOGAR PARA TU SIGUIENTE CAPÍTULO</small>
              <strong>
                Hola, Ana.
                <br />
                Conoce tu próximo espacio.
              </strong>
            </span>
          </Link>
          <div className="tour-preview-bottom">
            <span>Departamento Jacaranda</span>
            <span>Vista previa ilustrada · 24 s</span>
          </div>
        </div>
      </section>
      <section
        className="tour-proof tour-container"
        aria-label="Qué puedes probar"
      >
        <p>
          Primero, imagina el resultado.
          <br />
          <strong>Después, hazlo tuyo.</strong>
        </p>
        <div>
          <strong>01</strong>
          <span>Mira un recorrido</span>
        </div>
        <div>
          <strong>03</strong>
          <span>Compradores distintos</span>
        </div>
        <div>
          <strong>Tu toque</strong>
          <span>Edita y compara al instante</span>
        </div>
      </section>
      <section id="como-funciona" className="tour-section tour-container">
        <div className="tour-section-heading">
          <div>
            <p className="tour-eyebrow">MISMA IDEA. DISTINTAS HISTORIAS.</p>
            <h2>
              Cada búsqueda merece
              <br />
              su propio recorrido.
            </h2>
          </div>
          <p>
            Prueba cómo cambian el saludo, la propiedad y el beneficio
            destacado. Todo empieza con lo que le importa a cada persona.
          </p>
        </div>
        <div className="tour-buyer-stories">
          {sampleBuyers.map((buyer, index) => (
            <article key={buyer.nombre}>
              <span className="tour-story-number">0{index + 1}</span>
              <p className="tour-eyebrow">{buyer.zona}</p>
              <h3>{propertyOptions[index].profile}</h3>
              <p>
                {buyer.nombre} busca {buyer.interes.replaceAll("tu ", "su ")}.
                Su recorrido destaca {buyer.propiedad} y sus {buyer.recamaras}{" "}
                recámaras.
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="tour-invitation tour-container">
        <div>
          <p className="tour-eyebrow">DEL EJEMPLO A TU CAMPAÑA</p>
          <h2>
            El resultado primero.
            <br />
            Los datos, cuando estés listo.
          </h2>
          <p>
            Mira el recorrido, cambia de comprador y personaliza un detalle.
            Después descubre cómo cada fila de tu CSV se convierte en una
            versión.
          </p>
          <Link href="/video?mode=showcase" className="tour-button">
            Explorar el recorrido <span aria-hidden="true">→</span>
          </Link>
        </div>
        <ol>
          <li>
            <span>1</span>
            <div>
              <strong>Mira y compara</strong>
              <p>Tres personas. Tres maneras de presentar un hogar.</p>
            </div>
          </li>
          <li>
            <span>2</span>
            <div>
              <strong>Dale tu toque</strong>
              <p>Cambia el nombre o la propiedad y revisa el mensaje.</p>
            </div>
          </li>
          <li>
            <span>3</span>
            <div>
              <strong>Conecta tus datos</strong>
              <p>Usa la plantilla o carga tu CSV para probar tu campaña.</p>
            </div>
          </li>
        </ol>
      </section>
      <footer className="tour-footer tour-container">
        <span className="tour-brand">deepia</span>
        <p>Mensajes personales. Visitas con propósito.</p>
        <span>Demo con inmuebles ficticios</span>
      </footer>
    </main>
  );
}
