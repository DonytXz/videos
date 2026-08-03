"use client";

import { IconArrowLeft, IconCheck, IconPlayerPlayFilled } from "@tabler/icons-react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import type ReactPlayerClass from "react-player";
import { useEffect, useMemo, useRef, useState } from "react";

const VideoPlayer = dynamic(() => import("react-player"), { ssr: false }) as typeof ReactPlayerClass;

const VIDEO_DURATION = 5 * 60 + 14;

type Prospect = {
  perfil: string;
  canal: string;
  correo: string;
  tema: string;
};

type TimelineMoment = {
  id: string;
  time: number;
  timestamp: string;
  scene: string;
  field: keyof Prospect;
  getMessage: (prospect: Prospect) => string;
  getSupportingText: (prospect: Prospect) => string;
};

const defaultProspect: Prospect = {
  perfil: "Editor de Naturaleza",
  canal: "Fauna Viva",
  correo: "editor@faunaviva.demo",
  tema: "Especial Reptiles",
};

const moments: TimelineMoment[] = [
  {
    id: "start",
    time: 0,
    timestamp: "0:00",
    scene: "Inicio del video",
    field: "perfil",
    getMessage: (prospect) => `Bienvenido, ${prospect.perfil}`,
    getSupportingText: (prospect) => `Comienza una edición preparada para ${prospect.canal}.`,
  },
  {
    id: "snake",
    time: 1 * 60 + 34,
    timestamp: "1:34",
    scene: "Aparece la serpiente",
    field: "canal",
    getMessage: (prospect) => `${prospect.canal} presenta: la serpiente`,
    getSupportingText: () => "Precisión, adaptación y movimiento en su hábitat natural.",
  },
  {
    id: "komodo",
    time: 2 * 60 + 31,
    timestamp: "2:31",
    scene: "Aparece el dragón de Komodo",
    field: "tema",
    getMessage: (prospect) => `${prospect.tema}: dragón de Komodo`,
    getSupportingText: () => "El lagarto más grande del mundo entra en escena.",
  },
  {
    id: "finish",
    time: VIDEO_DURATION,
    timestamp: "5:14",
    scene: "Cierre del video",
    field: "correo",
    getMessage: (prospect) => `Sigue explorando con ${prospect.canal}`,
    getSupportingText: (prospect) => `Próxima edición: ${prospect.correo}`,
  },
];

const formatTime = (seconds: number) => {
  const safeSeconds = Math.max(0, Math.min(Math.round(seconds), VIDEO_DURATION));
  const minutes = Math.floor(safeSeconds / 60);
  const remainingSeconds = `${safeSeconds % 60}`.padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
};

export default function VideoPreview() {
  const router = useRouter();
  const playerRef = useRef<ReactPlayerClass | null>(null);
  const [prospect, setProspect] = useState(defaultProspect);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const storedData = sessionStorage.getItem("deepia-showcase");
    if (!storedData) return;

    try {
      const parsed = JSON.parse(storedData) as { rows?: Prospect[] };
      const firstRow = parsed.rows?.[0];
      if (
        !firstRow ||
        typeof firstRow.perfil !== "string" ||
        typeof firstRow.canal !== "string" ||
        typeof firstRow.correo !== "string" ||
        typeof firstRow.tema !== "string"
      ) return;
      const update = window.setTimeout(() => setProspect(firstRow), 0);
      return () => window.clearTimeout(update);
    } catch {
      // Keep the default showcase prospect if stored demo data is malformed.
    }
  }, []);

  const activeMoment = useMemo(() => {
    if (currentTime <= 7) return moments[0];
    if (currentTime >= VIDEO_DURATION - 5) return moments[moments.length - 1];

    return moments.slice(1, -1).find((moment) => currentTime >= moment.time && currentTime <= moment.time + 8) ?? null;
  }, [currentTime]);

  const highlightedMomentId = useMemo(
    () => [...moments].reverse().find((moment) => moment.time <= currentTime)?.id ?? "start",
    [currentTime],
  );

  const seekToMoment = (moment: TimelineMoment) => {
    const targetTime = moment.id === "finish" ? VIDEO_DURATION - 4 : moment.time;
    playerRef.current?.seekTo(targetTime, "seconds");
    setCurrentTime(targetTime);
    setIsPlaying(true);
  };

  const seekToTime = (seconds: number) => {
    playerRef.current?.seekTo(seconds, "seconds");
    setCurrentTime(seconds);
  };

  const progress = Math.min((currentTime / VIDEO_DURATION) * 100, 100);

  return (
    <main className="video-showcase-shell">
      <header className="video-showcase-header">
        <button type="button" onClick={() => router.push("/wizard/columns")}>
          <IconArrowLeft size={18} /> Volver a columnas
        </button>
        <div>
          <span className="video-showcase-step"><IconCheck size={12} /> Datos</span>
          <i />
          <span className="video-showcase-step"><IconCheck size={12} /> Columnas</span>
          <i />
          <span className="video-showcase-step is-current">3 · Vista previa</span>
        </div>
        <p>Campaña de ejemplo</p>
      </header>

      <section className="video-showcase-heading">
        <div>
          <p className="landing-eyebrow">Vista previa sincronizada</p>
          <h1>Comprueba cuándo aparece cada personalización.</h1>
        </div>
        <p>Reproduce el video o selecciona un momento de la línea de tiempo. El mensaje activo usa los datos de la primera fila de tu CSV.</p>
      </section>

      <section className="video-workspace">
        <div className="video-stage-panel">
          <div className="video-stage">
            <VideoPlayer
              ref={playerRef}
              controls
              playing={isPlaying}
              width="100%"
              height="100%"
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              progressInterval={250}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => {
                setIsPlaying(false);
                setCurrentTime(VIDEO_DURATION);
              }}
              onProgress={({ playedSeconds }) => setCurrentTime(Math.min(playedSeconds, VIDEO_DURATION))}
            />
            {activeMoment && (
              <div className={`video-personalization-overlay moment-${activeMoment.id}`} key={activeMoment.id}>
                <span>{activeMoment.scene}</span>
                <strong>{activeMoment.getMessage(prospect)}</strong>
                <p>{activeMoment.getSupportingText(prospect)}</p>
              </div>
            )}
          </div>
          <div className="video-stage-caption">
            <span><i /> Reproduciendo datos de <strong>{prospect.perfil}</strong></span>
            <span>{formatTime(currentTime)} / 5:14</span>
          </div>
        </div>

        <aside className="video-data-panel">
          <div className="video-data-panel-title">
            <div><span>EN</span><p><strong>{prospect.perfil}</strong><small>Fila 1 de 4 · {prospect.canal}</small></p></div>
            <i>CSV</i>
          </div>
          <p className="video-data-help">Estas son las variables que cambian en los cuatro momentos marcados.</p>
          {moments.map((moment) => (
            <button
              type="button"
              key={moment.id}
              onClick={() => seekToMoment(moment)}
              className={highlightedMomentId === moment.id ? "is-active" : ""}
            >
              <span>{moment.timestamp}</span>
              <p><small>{moment.scene}</small><strong>{moment.getMessage(prospect)}</strong></p>
              <IconPlayerPlayFilled size={13} />
            </button>
          ))}
          <div className="video-data-note"><span>✓</span><p><strong>Personalización conectada</strong><small>Cada marcador está vinculado a una columna del CSV.</small></p></div>
        </aside>
      </section>

      <section className="video-timeline-panel">
        <div className="video-timeline-title">
          <div><p>Línea de tiempo</p><span>Selecciona un marcador para saltar a esa escena.</span></div>
          <strong>{formatTime(currentTime)} <span>/ 5:14</span></strong>
        </div>

        <div className="video-timeline-ruler" aria-hidden="true">
          {[0, 60, 120, 180, 240, 300, 314].map((second) => <span key={second} style={{ left: `${(second / VIDEO_DURATION) * 100}%` }}>{formatTime(second)}</span>)}
        </div>

        <div className="video-timeline-track">
          <div className="video-timeline-progress" style={{ width: `${progress}%` }} />
          <div className="video-timeline-playhead" style={{ left: `${progress}%` }} />
          {moments.map((moment) => (
            <button
              type="button"
              key={moment.id}
              onClick={() => seekToMoment(moment)}
              className={`video-timeline-marker marker-${moment.id} ${highlightedMomentId === moment.id ? "is-active" : ""}`}
              style={{ left: `${(moment.time / VIDEO_DURATION) * 100}%` }}
              aria-label={`Ir a ${moment.timestamp}: ${moment.scene}`}
            >
              <span>{moment.timestamp}</span>
              <i />
            </button>
          ))}
          <input
            type="range"
            min="0"
            max={VIDEO_DURATION}
            step="1"
            value={Math.min(currentTime, VIDEO_DURATION)}
            onChange={(event) => seekToTime(Number(event.target.value))}
            aria-label="Posición del video"
          />
        </div>

        <div className="video-moment-cards">
          {moments.map((moment) => (
            <button type="button" key={moment.id} onClick={() => seekToMoment(moment)} className={highlightedMomentId === moment.id ? "is-active" : ""}>
              <span>{moment.timestamp}</span>
              <p><strong>{moment.scene}</strong><small>{moment.getMessage(prospect)}</small></p>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
