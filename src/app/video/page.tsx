"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import FunnelNav from "../components/property-demo/FunnelNav";
import PropertyScene from "../components/property-demo/PropertyScene";
import {
  saveCampaign,
  useCampaign,
} from "../components/property-demo/useCampaign";
import { getScript, propertyOptions, type Buyer } from "@/lib/property-demo";

const DURATION = 24;
const scenes = [
  { start: 0, label: "Saludo" },
  { start: 6, label: "Tu propiedad" },
  { start: 12, label: "Lo que te importa" },
  { start: 18, label: "La visita" },
];
const formatTime = (time: number) => `0:${String(time).padStart(2, "0")}`;

export default function VideoPreview() {
  const campaign = useCampaign();
  const buyer = campaign.rows[campaign.selected];
  return (
    <TourPreview
      key={`${campaign.source}-${campaign.fileName}-${campaign.selected}`}
      buyer={buyer}
    />
  );
}

function TourPreview({ buyer }: { buyer: Buyer }) {
  const campaign = useCampaign();
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [bookingExample, setBookingExample] = useState(false);
  const property = propertyOptions.find(
    (item) => item.propiedad === buyer.propiedad,
  );
  const sceneIndex = Math.min(Math.floor(time / 6), 3);

  useEffect(() => {
    if (!playing || time >= DURATION) return;
    const timer = window.setTimeout(
      () => setTime((previous) => Math.min(previous + 1, DURATION)),
      1000,
    );
    return () => window.clearTimeout(timer);
  }, [playing, time]);

  function updateBuyer(changes: Partial<Buyer>) {
    saveCampaign({
      ...campaign,
      rows: campaign.rows.map((row, index) =>
        index === campaign.selected ? { ...row, ...changes } : row,
      ),
    });
  }
  function togglePlay() {
    if (time >= DURATION) {
      setTime(0);
      setPlaying(true);
    } else setPlaying(!playing);
  }
  const titles = [
    `Hola, ${buyer.nombre || "tu comprador"}.`,
    buyer.propiedad,
    "Un espacio que va contigo.",
    `${buyer.nombre || "Tu comprador"}, ¿lo conocemos?`,
  ];
  const captions = [
    "Tu próximo capítulo empieza en casa.",
    `${buyer.recamaras} recámaras en ${buyer.zona}.`,
    `Pensando en ${buyer.interes}.`,
    `Agenda una visita a ${buyer.propiedad}.`,
  ];

  return (
    <main className="tour-shell">
      <FunnelNav step={1} />
      <section className="tour-container tour-page-heading">
        <div>
          <p className="tour-eyebrow">01 / MIRA EL RESULTADO</p>
          <h1>
            Un hogar. Una persona.
            <br />
            <em>Su propio recorrido.</em>
          </h1>
        </div>
        <p>
          Cambia de comprador y descubre qué cambia en su mensaje. Luego dale tu
          toque.
        </p>
      </section>
      <section
        className="tour-container"
        aria-label="Vista previa personalizada"
      >
        <div
          className="tour-buyer-switcher"
          role="group"
          aria-label="Elegir comprador"
        >
          {campaign.rows.map((row, index) => (
            <button
              type="button"
              key={index}
              aria-pressed={campaign.selected === index}
              onClick={() => saveCampaign({ ...campaign, selected: index })}
            >
              <span className="tour-avatar">
                {row.nombre.slice(0, 1) || "?"}
              </span>
              <span>
                <strong>{row.nombre || "Sin nombre"}</strong>
                <small>{row.zona}</small>
              </span>
              {campaign.selected === index && (
                <span className="tour-selected-dot" aria-hidden="true" />
              )}
            </button>
          ))}
        </div>
        <div className="tour-workspace">
          <div className="tour-player-panel">
            <div className="tour-preview-top">
              <span>
                <span className="tour-dot" /> PARA{" "}
                {buyer.nombre || "TU COMPRADOR"}
              </span>
              <span>VISTA PREVIA ILUSTRADA · SIN AUDIO</span>
            </div>
            <div className="tour-player-art">
              <PropertyScene
                scene={property?.scene}
                detail={sceneIndex === 2}
              />
              <span className="tour-art-label">
                {buyer.zona} · {buyer.recamaras} RECÁMARAS
              </span>
              <div className="tour-player-message" key={sceneIndex}>
                <small>{scenes[sceneIndex].label}</small>
                <h2>{titles[sceneIndex]}</h2>
                <p>{captions[sceneIndex]}</p>
                {sceneIndex === 3 && (
                  <button
                    className="tour-button tour-button-small"
                    type="button"
                    onClick={() => setBookingExample(true)}
                  >
                    Agendar visita <span aria-hidden="true">↗</span>
                  </button>
                )}
              </div>
            </div>
            <div className="tour-player-controls">
              <button
                type="button"
                className="tour-control-button"
                onClick={togglePlay}
                aria-label={
                  playing && time < DURATION
                    ? "Pausar recorrido"
                    : time >= DURATION
                      ? "Repetir recorrido"
                      : "Reproducir recorrido"
                }
              >
                {playing && time < DURATION ? "Ⅱ" : "▶"}
              </button>
              <input
                aria-label="Posición del recorrido"
                type="range"
                min={0}
                max={DURATION}
                step={1}
                value={time}
                onChange={(event) => setTime(Number(event.target.value))}
              />
              <span>{formatTime(time)} / 0:24</span>
            </div>
            <div
              className="tour-chapters"
              role="group"
              aria-label="Momentos del recorrido"
            >
              {scenes.map((scene, index) => (
                <button
                  type="button"
                  key={scene.start}
                  aria-pressed={sceneIndex === index}
                  onClick={() => setTime(scene.start)}
                >
                  <span>{formatTime(scene.start)}</span>
                  {scene.label}
                </button>
              ))}
            </div>
          </div>
          <aside className="tour-edit-panel">
            <p className="tour-eyebrow">HAZLO PERSONAL</p>
            <h2>Prueba con un detalle.</h2>
            <p>El mensaje y la vista previa cambian al instante.</p>
            <label htmlFor="buyer-name">Nombre del comprador</label>
            <input
              id="buyer-name"
              value={buyer.nombre}
              maxLength={80}
              onChange={(event) => updateBuyer({ nombre: event.target.value })}
              onBlur={() => {
                if (!buyer.nombre.trim())
                  updateBuyer({ nombre: "Tu comprador" });
              }}
            />
            <label htmlFor="buyer-property">Propiedad del recorrido</label>
            <select
              id="buyer-property"
              value={buyer.propiedad}
              onChange={(event) => {
                const next = propertyOptions.find(
                  (item) => item.propiedad === event.target.value,
                );
                if (next) {
                  updateBuyer({
                    propiedad: next.propiedad,
                    zona: next.zona,
                    recamaras: next.recamaras,
                    interes: next.interes,
                  });
                  setBookingExample(false);
                }
              }}
            >
              {!property && (
                <option value={buyer.propiedad}>{buyer.propiedad}</option>
              )}
              {propertyOptions.map((item) => (
                <option key={item.propiedad} value={item.propiedad}>
                  {item.propiedad}
                </option>
              ))}
            </select>
            <div className="tour-variable-summary" aria-live="polite">
              <span>
                <small>ZONA</small>
                <strong>{buyer.zona}</strong>
              </span>
              <span>
                <small>RECÁMARAS</small>
                <strong>{buyer.recamaras}</strong>
              </span>
              <p>
                <small>EL MENSAJE DESTACA</small>
                <strong>{buyer.interes}</strong>
              </p>
            </div>
            <p className="tour-editor-note">
              Cambian el saludo, el inmueble y el beneficio. El objetivo sigue
              siendo agendar una visita.
            </p>
          </aside>
        </div>
        {bookingExample && (
          <div className="tour-inline-notice" role="status">
            <div>
              <strong>Así termina el recorrido de {buyer.nombre}.</strong>
              <p>
                En una campaña real, este botón abriría tu agenda para visitar{" "}
                {buyer.propiedad}. Esta demo no reserva ni envía mensajes.
              </p>
            </div>
            <button
              type="button"
              aria-label="Cerrar explicación de la visita"
              onClick={() => setBookingExample(false)}
            >
              ×
            </button>
          </div>
        )}
        <div className="tour-script">
          <p className="tour-eyebrow">
            EL GUION DE {buyer.nombre || "TU COMPRADOR"}
          </p>
          <p>
            {getScript({ ...buyer, nombre: buyer.nombre || "tu comprador" })}
          </p>
        </div>
        <div className="tour-next-step">
          <div>
            <h2>Ya viste el resultado. Ahora, los datos.</h2>
            <p>
              Explora las filas que dan forma a cada versión, con tus cambios
              incluidos.
            </p>
            <small>
              Simulación con ilustraciones; no genera ni exporta un archivo de
              video.
            </small>
          </div>
          <Link href="/wizard/csv?mode=showcase" className="tour-button">
            Explorar el CSV <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
