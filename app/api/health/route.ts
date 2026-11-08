import { connection } from "next/server";

// Kontrola stavu: hosting ji volá po spuštění nové verze a provoz na ni
// přepne, teprve až odpoví 200.
export async function GET() {
  await connection();
  return Response.json({ status: "ok", version: process.env.APP_VERSION });
}
