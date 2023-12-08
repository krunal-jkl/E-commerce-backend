import { MedusaRequest, MedusaResponse } from "@medusajs/medusa";

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  console.log('CUrrent Request : =====> ', req.params);
  res.sendStatus(200);
}
