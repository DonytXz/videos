import Link from "next/link";

const steps = [
  { href: "/video?mode=showcase", label: "Recorrido" },
  { href: "/wizard/csv?mode=showcase", label: "Tus datos" },
  { href: "/wizard/columns?mode=showcase", label: "Tu campaña" },
];

export default function FunnelNav({ step }: { step: number }) {
  return (
    <nav className="tour-nav" aria-label="Navegación de la demo">
      <Link href="/" className="tour-brand" aria-label="Deepia, inicio">
        <span aria-hidden="true">d.</span> deepia
      </Link>
      <ol className="tour-steps">
        {steps.map((item, index) => (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={step === index + 1 ? "step" : undefined}
            >
              <span>{index + 1}</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
      <span className="tour-demo-label">Demo interactiva</span>
    </nav>
  );
}
