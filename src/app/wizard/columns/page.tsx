"use client";

import Link from "next/link";
import FunnelNav from "../../components/property-demo/FunnelNav";
import {
  saveCampaign,
  useCampaign,
} from "../../components/property-demo/useCampaign";
import { csvColumns, getScript } from "@/lib/property-demo";

export default function Columns() {
  const campaign = useCampaign();
  const buyer = campaign.rows[campaign.selected];
  return (
    <main className="tour-shell">
      <FunnelNav step={3} />
      <section className="tour-container tour-page-heading">
        <div>
          <p className="tour-eyebrow">03 / DALE FORMA A TU CAMPAÑA</p>
          <h1>
            Un mensaje relevante.
            <br />
            <em>Una visita como objetivo.</em>
          </h1>
        </div>
        <p>
          La plantilla conecta cada columna con una parte del recorrido. Así se
          construye cada versión.
        </p>
      </section>
      <section className="tour-container tour-campaign-grid">
        <div className="tour-mapping">
          <div className="tour-mapping-heading">
            <h2>Del dato al mensaje</h2>
            <span>{csvColumns.length} columnas conectadas</span>
          </div>
          {csvColumns.map((column) => (
            <article key={column.key}>
              <div>
                <p className="tour-eyebrow">{column.label}</p>
                <strong>{buyer[column.key]}</strong>
              </div>
              <span aria-hidden="true">→</span>
              <p>{column.use}</p>
            </article>
          ))}
        </div>
        <aside className="tour-campaign-summary">
          <p className="tour-eyebrow">TU CAMPAÑA, DE UN VISTAZO</p>
          <h2>
            {campaign.rows.length}{" "}
            {campaign.rows.length === 1 ? "comprador" : "compradores"}.<br />
            Un siguiente paso.
          </h2>
          <label htmlFor="campaign-buyer">Revisar mensaje de</label>
          <select
            id="campaign-buyer"
            value={campaign.selected}
            onChange={(event) =>
              saveCampaign({
                ...campaign,
                selected: Number(event.target.value),
              })
            }
          >
            {campaign.rows.map((row, index) => (
              <option key={index} value={index}>
                {row.nombre} · {row.zona}
              </option>
            ))}
          </select>
          <blockquote>{getScript(buyer)}</blockquote>
          <div className="tour-summary-cta">
            <small>CIERRE DEL RECORRIDO</small>
            <strong>Agendar visita ↗</strong>
          </div>
          <Link href="/video?mode=showcase" className="tour-text-link">
            Volver a la vista previa →
          </Link>
        </aside>
      </section>
      <section className="tour-container tour-next-step">
        <div>
          <h2>
            {campaign.source === "example"
              ? "Ahora imagínalo con tus propiedades."
              : "Tu campaña está lista para revisar."}
          </h2>
          <p>
            {campaign.source === "example"
              ? "Carga tu CSV y prueba cada mensaje con tus compradores."
              : "Abre cada versión, revisa el nombre y confirma que la propiedad sea la correcta."}
          </p>
          <small>
            Esta demo permite revisar mensajes. La generación de video y las
            reservas no están conectadas.
          </small>
        </div>
        <Link
          href={
            campaign.source === "example"
              ? "/wizard/csv?source=upload"
              : "/video?mode=showcase"
          }
          className="tour-button"
        >
          {campaign.source === "example"
            ? "Crear videos con mis propiedades"
            : "Previsualizar mi campaña"}{" "}
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}
