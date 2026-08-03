import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/basePath";

const steps = [
  {
    number: "01",
    title: "Conecta tus datos",
    description: "Carga un CSV con perfiles, canales, temas y datos de contacto. Deepia reconoce las columnas automáticamente.",
  },
  {
    number: "02",
    title: "Define qué cambia",
    description: "Elige las variables que aparecerán en la introducción, los momentos editoriales y el cierre de cada video.",
  },
  {
    number: "03",
    title: "Revisa antes de enviar",
    description: "Previsualiza el resultado, ajusta el ritmo en la línea de tiempo y valida cada versión antes de publicarla.",
  },
];

const outcomes = [
  "Un video único por cada fila de tu base de datos",
  "Mensajes consistentes con tu canal y línea editorial",
  "Vista previa y control editorial antes de exportar",
];

export default function Home() {
  return (
    <main className="landing-shell text-white">
      <nav className="landing-nav" aria-label="Navegación principal">
        <Link href="/" className="flex items-center gap-3" aria-label="Deepia, inicio">
          <Image src={withBasePath("/img/logo-min.svg")} alt="" width={36} height={36} priority />
          <span className="text-xl font-semibold tracking-tight">Deepia</span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-6">
          <a href="#como-funciona" className="hidden text-sm text-white/70 transition hover:text-white sm:block">
            Cómo funciona
          </a>
          <Link href="/auth/login" className="hidden text-sm text-white/70 transition hover:text-white sm:block">
            Iniciar sesión
          </Link>
          <Link href="/wizard/csv?mode=showcase" className="landing-button landing-button-small">
            Probar demo
          </Link>
        </div>
      </nav>

      <section className="landing-hero">
        <div className="landing-hero-copy">
          <div className="landing-kicker"><span /> Video personalizado a escala</div>
          <h1>Convierte cada fila de tu base de datos en un video que se siente personal.</h1>
          <p>
            Deepia combina una grabación base con los datos de cada prospecto para crear mensajes de venta relevantes,
            revisables y listos para compartir.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/wizard/csv?mode=showcase" className="landing-button">
              Ver el flujo con datos de ejemplo <span aria-hidden="true">→</span>
            </Link>
            <Link href="/auth/login" className="landing-button landing-button-secondary">
              Ya tengo una cuenta
            </Link>
          </div>
          <p className="landing-no-card">Sin registro · Sin tarjeta · Demo guiada de 2 minutos</p>
        </div>

        <div className="landing-product-card" aria-label="Vista previa del producto">
          <div className="landing-card-topbar">
            <div className="flex gap-2"><span /><span /><span /></div>
            <p>Campaña · Renovación Q3</p>
            <div className="landing-live"><i /> Vista previa</div>
          </div>
          <div className="landing-preview-grid">
            <div className="landing-video-frame">
              <div className="landing-person-badge">EN</div>
              <div className="landing-caption">
                <small>Mensaje generado para</small>
                <strong>Editor de Naturaleza · Fauna Viva</strong>
              </div>
              <div className="landing-play" aria-hidden="true">▶</div>
            </div>
            <div className="landing-fields">
              <p>Variables activas</p>
              <div><span>Perfil</span><strong>Editor de Naturaleza</strong></div>
              <div><span>Canal</span><strong>Fauna Viva</strong></div>
              <div><span>Tema</span><strong>Especial Reptiles</strong></div>
              <div><span>Contacto</span><strong>editor@faunaviva.demo</strong></div>
            </div>
          </div>
          <div className="landing-timeline">
            <div><span style={{ width: "24%" }}>Saludo</span><span style={{ width: "38%" }}>Propuesta</span><span style={{ width: "28%" }}>Cierre</span></div>
            <i />
          </div>
        </div>
      </section>

      <section className="landing-proof" aria-label="Beneficios principales">
        <p>De una grabación base a una conversación relevante con cada prospecto.</p>
        <div>
          <span><strong>1 CSV</strong> como fuente de verdad</span>
          <span><strong>Vista previa</strong> antes de publicar</span>
          <span><strong>Escala humana</strong> sin regrabar</span>
        </div>
      </section>

      <section id="como-funciona" className="landing-section">
        <div className="landing-section-heading">
          <div>
            <p className="landing-eyebrow">Del dato al video</p>
            <h2>Personalizar no debería significar empezar de cero.</h2>
          </div>
          <p>Configura una vez la estructura del mensaje. Deepia aplica tus variables y mantiene el control creativo en tus manos.</p>
        </div>
        <div className="landing-steps">
          {steps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-outcome">
        <div>
          <p className="landing-eyebrow">Una demo que sí puedes recorrer</p>
          <h2>Mira el resultado antes de conectar tus propios datos.</h2>
          <p className="landing-outcome-copy">
            Usa nuestra campaña de ejemplo, revisa cómo asignamos cada columna y abre una vista previa editable. No necesitas credenciales.
          </p>
          <ul>
            {outcomes.map((outcome) => <li key={outcome}><span>✓</span>{outcome}</li>)}
          </ul>
          <Link href="/wizard/csv?mode=showcase" className="landing-button">
            Abrir campaña de ejemplo <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="landing-dataset-card">
          <div className="landing-dataset-title"><span>deepia_prospectos_demo.csv</span><strong>4 registros</strong></div>
          <div className="landing-table-row landing-table-head"><span>Perfil</span><span>Canal</span><span>Tema</span></div>
          <div className="landing-table-row"><span>Editor</span><span>Fauna Viva</span><span>Reptiles</span></div>
          <div className="landing-table-row"><span>Productor</span><span>Mundo Salvaje</span><span>Depredadores</span></div>
          <div className="landing-table-row"><span>Curadora</span><span>Archivo Animal</span><span>Vida silvestre</span></div>
          <div className="landing-dataset-status"><i /> Datos listos para personalizar</div>
        </div>
      </section>

      <footer className="landing-footer">
        <div><strong>Deepia</strong><span>Video personalizado, sin perder el toque humano.</span></div>
        <Link href="/wizard/csv?mode=showcase">Probar la demo →</Link>
      </footer>
    </main>
  );
}
