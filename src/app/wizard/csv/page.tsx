"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { withBasePath } from "@/lib/basePath";

const exampleRows = [
  { perfil: "Editor de Naturaleza", canal: "Fauna Viva", correo: "editor@faunaviva.demo", tema: "Especial Reptiles" },
  { perfil: "Productor de Campo", canal: "Mundo Salvaje", correo: "produccion@mundosalvaje.demo", tema: "Grandes Depredadores" },
  { perfil: "Curadora de Fauna", canal: "Archivo Animal", correo: "curaduria@archivoanimal.demo", tema: "Vida Silvestre" },
  { perfil: "Narrador Documental", canal: "Planeta Vivo", correo: "narracion@planetavivo.demo", tema: "Ecosistemas" },
];

function UploadCSVContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isShowcase = searchParams.get("mode") === "showcase";
  const [source, setSource] = useState<"example" | "upload" | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const loadSource = (nextSource: "example" | "upload") => {
    setIsProcessing(true);
    window.setTimeout(() => {
      setSource(nextSource);
      setIsProcessing(false);
      sessionStorage.setItem("deepia-showcase", JSON.stringify({ source: nextSource, rows: exampleRows }));
    }, 650);
  };

  const { getRootProps, getInputProps, open, acceptedFiles, isDragActive } = useDropzone({
    disabled: isShowcase,
    noClick: true,
    noKeyboard: true,
    accept: { "text/csv": [".csv"] },
    multiple: false,
    onDropAccepted: () => loadSource("upload"),
  });

  const uploadedName = useMemo(() => acceptedFiles[0]?.name, [acceptedFiles]);

  return (
    <main className="wizard-showcase-shell">
      <nav className="wizard-showcase-nav">
        <Link href="/" className="flex items-center gap-3">
          <Image src={withBasePath("/img/logo-min.svg")} alt="" width={34} height={34} />
          <span>Deepia</span>
        </Link>
        <div className="wizard-progress"><strong>1</strong><span /><i>2</i><span /><i>3</i></div>
        <p>Paso 1 de 3 · Datos</p>
      </nav>

      <section className="wizard-showcase-content">
        <div className="wizard-showcase-heading">
          <p className="landing-eyebrow">Prepara tu personalización</p>
          <h1>¿Con qué datos quieres crear tus videos?</h1>
          <p>Sube tu archivo o usa nuestro ejemplo para recorrer el flujo completo sin preparar nada.</p>
        </div>

        <div className="wizard-source-grid">
          <div {...getRootProps()} className={`wizard-source-card ${isDragActive ? "is-dragging" : ""} ${isShowcase ? "is-disabled" : ""}`} aria-disabled={isShowcase}>
            {isShowcase && <div className="wizard-disabled-tag">Desactivado en la demo</div>}
            <input {...getInputProps()} />
            <div className="wizard-source-icon"><Image src={withBasePath("/img/icon/upload.svg")} alt="" width={28} height={28} /></div>
            <p className="wizard-source-label">Tus datos</p>
            <h2>Sube un archivo CSV</h2>
            <p>Una fila por versión. Recomendamos incluir perfil, canal, correo y tema editorial.</p>
            <button type="button" onClick={open} disabled={isShowcase} className="landing-button landing-button-secondary">
              {isShowcase ? "Disponible al iniciar sesión" : "Elegir archivo"}
            </button>
            <small>Máximo 10 MB · Solo archivos .csv</small>
          </div>

          <div className="wizard-source-card wizard-source-example">
            <div className="wizard-example-tag">Recomendado para explorar</div>
            <div className="wizard-source-icon">✦</div>
            <p className="wizard-source-label">Demo guiada</p>
            <h2>Usa nuestra base de ejemplo</h2>
            <p>Cuatro prospectos ficticios con todo lo necesario para ver una personalización completa.</p>
            <button type="button" onClick={() => loadSource("example")} className="landing-button">
              Cargar CSV de ejemplo
            </button>
            <a href={withBasePath("/examples/deepia-prospectos-demo.csv")} download className="wizard-download">Descargar y revisar el CSV</a>
          </div>
        </div>

        {isProcessing && <div className="wizard-processing"><i /><span>Detectando columnas y preparando la vista previa…</span></div>}

        {source && !isProcessing && (
          <section className="wizard-data-preview" aria-live="polite">
            <div className="wizard-preview-title">
              <div><i /><span><strong>{source === "example" ? "deepia-prospectos-demo.csv" : uploadedName}</strong><small>4 filas · 4 columnas detectadas</small></span></div>
              <button type="button" onClick={() => setSource(null)}>Cambiar archivo</button>
            </div>
            <div className="wizard-table-wrap">
              <table>
                <thead><tr><th>Perfil</th><th>Canal</th><th>Correo</th><th>Tema</th></tr></thead>
                <tbody>{exampleRows.slice(0, 3).map((row) => <tr key={row.correo}><td>{row.perfil}</td><td>{row.canal}</td><td>{row.correo}</td><td>{row.tema}</td></tr>)}</tbody>
              </table>
            </div>
            <div className="wizard-preview-actions">
              <p><span>✓</span> Los datos están listos. Podrás elegir cómo usar cada columna en el siguiente paso.</p>
              <button type="button" onClick={() => router.push("/wizard/columns")} className="landing-button">
                Continuar con estas columnas →
              </button>
            </div>
          </section>
        )}
      </section>
    </main>
  );
}

export default function UploadCSV() {
  return (
    <Suspense fallback={<main className="wizard-showcase-shell" />}>
      <UploadCSVContent />
    </Suspense>
  );
}
