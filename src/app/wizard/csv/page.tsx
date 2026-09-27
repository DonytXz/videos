"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useRef, useState, type ChangeEvent } from "react";
import FunnelNav from "../../components/property-demo/FunnelNav";
import {
  saveCampaign,
  useCampaign,
} from "../../components/property-demo/useCampaign";
import {
  csvColumns,
  defaultCampaign,
  MAX_FILE_BYTES,
  MAX_ROWS,
  parseBuyersCsv,
} from "@/lib/property-demo";
import { withBasePath } from "@/lib/basePath";

function CampaignData() {
  const campaign = useCampaign();
  const params = useSearchParams();
  const uploadFirst = params.get("source") === "upload";
  const [error, setError] = useState("");
  const [reading, setReading] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  async function readFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    setError("");
    if (
      !file.name.toLowerCase().endsWith(".csv") ||
      file.size > MAX_FILE_BYTES
    ) {
      setError("Elige un archivo .csv de hasta 1 MB.");
      event.target.value = "";
      return;
    }
    setReading(true);
    try {
      const rows = parseBuyersCsv(await file.text());
      saveCampaign({
        source: "upload",
        fileName: file.name,
        rows,
        selected: 0,
      });
    } catch (issue) {
      setError(
        issue instanceof Error
          ? issue.message
          : "No pudimos leer el archivo. Inténtalo con la plantilla.",
      );
    } finally {
      setReading(false);
      if (fileInput.current) fileInput.current.value = "";
    }
  }

  return (
    <main className="tour-shell">
      <FunnelNav step={2} />
      <section className="tour-container tour-page-heading">
        <div>
          <p className="tour-eyebrow">02 / DESCUBRE LOS DATOS</p>
          <h1>
            {uploadFirst ? (
              <>
                Tu lista de compradores.
                <br />
                <em>Tu siguiente campaña.</em>
              </>
            ) : (
              <>
                Cada fila.
                <br />
                <em>Un recorrido personal.</em>
              </>
            )}
          </h1>
        </div>
        <p>
          {uploadFirst
            ? "Carga tu CSV para probar los mensajes con tus propiedades. Puedes descargar la plantilla para empezar."
            : "Estos son los datos detrás del recorrido. Tus cambios ya están aquí; no tienes que volver a capturarlos."}
        </p>
      </section>
      <section className="tour-container tour-data-content">
        <div className="tour-upload-bar">
          <div>
            <h2>
              {uploadFirst
                ? "Carga los datos de tu campaña"
                : "¿Quieres probar con tus propiedades?"}
            </h2>
            <p>
              CSV · Hasta 1 MB · {MAX_ROWS} compradores · Se procesa en este
              navegador
            </p>
          </div>
          <div className="tour-actions">
            <a
              className="tour-text-link"
              href={withBasePath("/examples/deepia-propiedades-demo.csv")}
              download
            >
              Descargar plantilla ↓
            </a>
            <label className="tour-button tour-upload-label">
              {reading ? "Leyendo archivo…" : "Elegir mi CSV"}
              <input
                ref={fileInput}
                type="file"
                accept=".csv,text/csv"
                aria-label="Elegir mi CSV"
                disabled={reading}
                onChange={readFile}
              />
            </label>
          </div>
        </div>
        <p className="tour-small tour-muted tour-upload-note">
          La plantilla incluye: nombre, correo, propiedad, zona, recamaras e
          interes. Usaremos ilustraciones de ejemplo para previsualizar los
          mensajes.
        </p>
        {error && (
          <p className="tour-error" role="alert">
            {error} Tu campaña anterior sigue disponible abajo.
          </p>
        )}
        <section
          className="tour-table-panel"
          aria-label="Datos de la campaña"
          aria-busy={reading}
        >
          <div className="tour-table-heading">
            <div>
              <p className="tour-eyebrow">
                {campaign.source === "example"
                  ? "CAMPAÑA DE EJEMPLO · DATOS FICTICIOS"
                  : "TU CAMPAÑA · VISTA PREVIA LOCAL"}
              </p>
              <h2>{campaign.fileName}</h2>
              <p aria-live="polite">
                {campaign.rows.length}{" "}
                {campaign.rows.length === 1 ? "comprador" : "compradores"} ·{" "}
                {csvColumns.length} columnas · Fila seleccionada:{" "}
                {campaign.selected + 1}
              </p>
            </div>
            <button
              type="button"
              className="tour-text-link"
              disabled={reading}
              onClick={() => {
                saveCampaign(defaultCampaign);
                setError("");
              }}
            >
              Restablecer ejemplo
            </button>
          </div>
          <div
            className="tour-data-table"
            tabIndex={0}
            role="region"
            aria-label="Tabla de compradores, desplazable horizontalmente"
          >
            <table>
              <caption className="tour-sr-only">
                Compradores y propiedades de {campaign.fileName}
              </caption>
              <thead>
                <tr>
                  <th scope="col">Vista previa</th>
                  {csvColumns.map((column) => (
                    <th scope="col" key={column.key}>
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {campaign.rows.map((row, index) => (
                  <tr
                    key={index}
                    className={index === campaign.selected ? "is-selected" : ""}
                  >
                    <td>
                      <Link
                        href="/video?mode=showcase"
                        onClick={() =>
                          saveCampaign({ ...campaign, selected: index })
                        }
                        aria-label={`Ver recorrido de ${row.nombre}`}
                      >
                        Ver recorrido ↗
                      </Link>
                    </td>
                    {csvColumns.map(({ key }) => (
                      <td key={key}>{row[key]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <div className="tour-next-step">
          <div>
            <h2>Los datos le dan forma al mensaje.</h2>
            <p>Revisa qué aporta cada columna y prepara tu campaña.</p>
          </div>
          <Link href="/wizard/columns?mode=showcase" className="tour-button">
            Revisar mi campaña <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default function UploadCSV() {
  return (
    <Suspense
      fallback={
        <main className="tour-shell">
          <FunnelNav step={2} />
          <p className="tour-container tour-loading">
            Preparando los datos de tu campaña…
          </p>
        </main>
      }
    >
      <CampaignData />
    </Suspense>
  );
}
