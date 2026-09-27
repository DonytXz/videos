export const propertyOptions = [
  {
    propiedad: "Departamento Jacaranda",
    zona: "Roma Norte",
    recamaras: "2",
    interes: "tu primer hogar y una distribución abierta",
    profile: "Mi primer hogar",
    scene: "roma",
  },
  {
    propiedad: "Casa del Patio",
    zona: "Coyoacán",
    recamaras: "3",
    interes: "más espacio para tu familia y un jardín",
    profile: "Espacio para mi familia",
    scene: "coyoacan",
  },
  {
    propiedad: "Departamento Olivo",
    zona: "Del Valle",
    recamaras: "2",
    interes: "vivir cerca de tu trabajo y del transporte",
    profile: "Más cerca de todo",
    scene: "valle",
  },
] as const;

export const csvColumns = [
  { key: "nombre", label: "Nombre", use: "El saludo de cada recorrido" },
  {
    key: "correo",
    label: "Correo",
    use: "Contacto del comprador; no se muestra en el recorrido",
  },
  { key: "propiedad", label: "Propiedad", use: "El inmueble presentado" },
  { key: "zona", label: "Zona", use: "La ubicación del inmueble" },
  {
    key: "recamaras",
    label: "Recámaras",
    use: "La distribución que busca el comprador",
  },
  {
    key: "interes",
    label: "Interés",
    use: "El beneficio que destaca el mensaje",
  },
] as const;

export type Buyer = Record<(typeof csvColumns)[number]["key"], string>;
export type Campaign = {
  source: "example" | "upload";
  fileName: string;
  rows: Buyer[];
  selected: number;
};
export const MAX_ROWS = 100;
export const MAX_FILE_BYTES = 1024 * 1024;
export const sampleBuyers: Buyer[] = propertyOptions.map((property, index) => ({
  nombre: ["Ana", "Diego", "Sofía"][index],
  correo: ["ana@example.com", "diego@example.com", "sofia@example.com"][index],
  propiedad: property.propiedad,
  zona: property.zona,
  recamaras: property.recamaras,
  interes: property.interes,
}));
export const defaultCampaign: Campaign = {
  source: "example",
  fileName: "deepia-propiedades-demo.csv",
  rows: sampleBuyers,
  selected: 0,
};

export function getScript(buyer: Buyer) {
  return `Hola, ${buyer.nombre}. Te presento ${buyer.propiedad}: ${buyer.recamaras} recámaras en ${buyer.zona}. Pensando en ${buyer.interes}, preparé este recorrido para ti. ¿Agendamos una visita?`;
}

export function isBuyer(value: unknown): value is Buyer {
  if (!value || typeof value !== "object") return false;
  const row = value as Record<string, unknown>;
  return (
    csvColumns.every(
      ({ key }) =>
        typeof row[key] === "string" &&
        row[key].trim().length > 0 &&
        row[key].length <= 200,
    ) &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(row.correo as string) &&
    /^(?:[1-9]|10)$/.test(row.recamaras as string)
  );
}

export function restoreCampaign(raw: string | null): Campaign {
  try {
    const value = JSON.parse(raw ?? "null") as Campaign | null;
    if (
      value &&
      (value.source === "example" || value.source === "upload") &&
      typeof value.fileName === "string" &&
      value.fileName.length <= 255 &&
      Array.isArray(value.rows) &&
      value.rows.length > 0 &&
      value.rows.length <= MAX_ROWS &&
      value.rows.every(isBuyer) &&
      Number.isInteger(value.selected) &&
      value.selected >= 0 &&
      value.selected < value.rows.length
    )
      return value;
  } catch {
    /* Invalid or older session data falls back to the example. */
  }
  return defaultCampaign;
}

// Handles commas, CRLF, a UTF-8 BOM, escaped quotes, and quoted multiline cells.
export function parseBuyersCsv(text: string): Buyer[] {
  const input = text.replace(/^\uFEFF/, "");
  const records: string[][] = [];
  let record: string[] = [];
  let cell = "";
  let quoted = false;
  let closedQuote = false;
  const finishCell = () => {
    record.push(cell.trim());
    cell = "";
    closedQuote = false;
  };
  const finishRecord = () => {
    finishCell();
    if (record.some(Boolean)) records.push(record);
    if (records.length > MAX_ROWS + 1)
      throw new Error(`Usa un máximo de ${MAX_ROWS} compradores por archivo.`);
    record = [];
  };
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (quoted) {
      if (char === '"' && input[i + 1] === '"') {
        cell += '"';
        i++;
      } else if (char === '"') {
        quoted = false;
        closedQuote = true;
      } else cell += char;
    } else if (char === '"' && !cell && !closedQuote) quoted = true;
    else if (char === ",") finishCell();
    else if (char === "\n" || char === "\r") {
      finishRecord();
      if (char === "\r" && input[i + 1] === "\n") i++;
    } else if (char === '"' || (closedQuote && char.trim()))
      throw new Error("Revisa las comillas del archivo CSV.");
    else if (!closedQuote) cell += char;
  }
  if (quoted) throw new Error("Hay una celda con comillas sin cerrar.");
  finishRecord();
  const headers = records.shift()?.map((header) => header.toLowerCase());
  if (!headers || !records.length)
    throw new Error("Incluye los encabezados y al menos un comprador.");
  if (new Set(headers).size !== headers.length)
    throw new Error("Hay encabezados duplicados en el archivo.");
  const missing = csvColumns.filter(({ key }) => !headers.includes(key));
  if (missing.length)
    throw new Error(
      `Faltan estas columnas: ${missing.map(({ key }) => key).join(", ")}. Usa la plantilla de ejemplo.`,
    );
  return records.map((values, index) => {
    if (values.length !== headers.length)
      throw new Error(
        `La fila ${index + 2} tiene un número de columnas distinto al encabezado.`,
      );
    const buyer = Object.fromEntries(
      csvColumns.map(({ key }) => [key, values[headers.indexOf(key)]]),
    );
    if (!isBuyer(buyer))
      throw new Error(
        `Revisa la fila ${index + 2}: completa todos los campos (máximo 200 caracteres), un correo válido y de 1 a 10 recámaras.`,
      );
    return buyer;
  });
}
