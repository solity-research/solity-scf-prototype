import protocols from "@solity/data/protocols";
import type { NextApiRequest, NextApiResponse } from "next";

/**
 * Fetches protocols list
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).send(protocols);
}
