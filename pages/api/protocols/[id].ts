import protocols from "@solity/data/protocols";
import type { NextApiRequest, NextApiResponse } from "next";

/**
 * Fetches protocols list
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const id = req.query.id;
  if (!id) {
    res.status(404).send("Protocol not found");
    return;
  }
  res.status(200).json(protocols.find((p) => p.slug === id));
}
