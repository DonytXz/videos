import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  csvColumns,
  defaultCampaign,
  getScript,
  MAX_ROWS,
  parseBuyersCsv,
  restoreCampaign,
  sampleBuyers,
} from "../src/lib/property-demo.ts";

const header = csvColumns.map(({ key }) => key).join(",");
const row =
  "Ana,ana@example.com,Departamento Jacaranda,Roma Norte,2,una sala abierta";

test("downloadable template and legacy download match the shared demo", () => {
  for (const filename of [
    "deepia-propiedades-demo.csv",
    "deepia-prospectos-demo.csv",
  ]) {
    const csv = readFileSync(
      new URL(`../public/examples/${filename}`, import.meta.url),
      "utf8",
    );
    assert.deepEqual(parseBuyersCsv(csv), sampleBuyers);
  }
});

test("CSV supports UTF-8 BOM, CRLF, quoted commas, escaped quotes, and multiline interests", () => {
  const rows = parseBuyersCsv(
    `\uFEFF${header}\r\nAna,ana@example.com,"Casa, Norte",Roma Norte,2,"luz y una sala \"\"abierta\"\"\r\ncon jardín"\r\n`,
  );
  assert.equal(rows[0].propiedad, "Casa, Norte");
  assert.equal(rows[0].interes, 'luz y una sala "abierta"\r\ncon jardín');
});

test("CSV columns are matched by name even when reordered", () => {
  const rows = parseBuyersCsv(
    "ZONA, NOMBRE,correo,interes,recamaras,propiedad\nDel Valle,Lucía,lucia@example.com,cercanía,3,Casa Olivo\n",
  );
  assert.equal(rows[0].nombre, "Lucía");
  assert.equal(rows[0].recamaras, "3");
  assert.equal(rows[0].propiedad, "Casa Olivo");
});

test("invalid uploads fail explicitly rather than silently showing sample data", () => {
  assert.throws(() => parseBuyersCsv(""), /encabezados/);
  assert.throws(() => parseBuyersCsv(`${header}\n`), /comprador/);
  assert.throws(
    () => parseBuyersCsv(`nombre,correo\nAna,ana@example.com`),
    /Faltan/,
  );
  assert.throws(
    () => parseBuyersCsv(`${header},nombre\n${row},Ana`),
    /duplicados/,
  );
  assert.throws(() => parseBuyersCsv(`${header}\n${row},extra`), /columnas/);
  assert.throws(
    () =>
      parseBuyersCsv(`${header}\n${row.replace("ana@example.com", "invalid")}`),
    /fila 2/,
  );
  assert.throws(
    () => parseBuyersCsv(`${header}\n${row.replace(",2,", ",0,")}`),
    /fila 2/,
  );
  assert.throws(
    () => parseBuyersCsv(`${header}\n${row.replace("Ana,", ",")}`),
    /fila 2/,
  );
  assert.throws(
    () =>
      parseBuyersCsv(
        `${header}\n${row.replace("Ana,", `${"A".repeat(201)},`)}`,
      ),
    /fila 2/,
  );
  assert.throws(() => parseBuyersCsv(`${header}\n"${row}`), /sin cerrar/);
  assert.throws(
    () =>
      parseBuyersCsv(`${header}\n"Ana"extra,ana@example.com,Casa,Roma,2,luz`),
    /comillas/,
  );
  assert.throws(
    () =>
      parseBuyersCsv(
        `${header}\n${Array(MAX_ROWS + 1)
          .fill(row)
          .join("\n")}`,
      ),
    /máximo/,
  );
  assert.equal(
    parseBuyersCsv(`${header}\n${Array(MAX_ROWS).fill(row).join("\n")}`).length,
    MAX_ROWS,
  );
});

test("reload preserves an edited campaign and selected buyer", () => {
  const campaign = {
    ...defaultCampaign,
    selected: 1,
    rows: sampleBuyers.map((buyer, index) =>
      index === 1 ? { ...buyer, nombre: "Daniel" } : buyer,
    ),
  };
  assert.deepEqual(restoreCampaign(JSON.stringify(campaign)), campaign);
});

test("bad storage, legacy wildlife rows, and invalid selected indices fall back safely", () => {
  for (const value of [
    null,
    "bad JSON",
    "null",
    JSON.stringify({ rows: [{ perfil: "Editor" }] }),
    JSON.stringify({ ...defaultCampaign, selected: 99 }),
    JSON.stringify({ ...defaultCampaign, rows: [] }),
    JSON.stringify({ ...defaultCampaign, selected: -1 }),
  ]) {
    assert.equal(restoreCampaign(value), defaultCampaign);
  }
});

test("personalization uses the selected buyer's property, benefit, and visit CTA without exposing email", () => {
  const script = getScript(sampleBuyers[1]);
  for (const text of [
    "Diego",
    "Casa del Patio",
    "Coyoacán",
    "3 recámaras",
    "familia y un jardín",
    "¿Agendamos una visita?",
  ])
    assert.ok(script.includes(text));
  assert.ok(!script.includes(sampleBuyers[1].correo));
});
