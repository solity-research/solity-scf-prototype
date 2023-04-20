import { generateQueryString } from "@solity/helpers";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

/**
 * Fetches protocols list
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  let id = req.query.id;
  if (!id || typeof id !== "string") {
    res.status(404).json("Invalid ID");
    return;
  }
  const [assetCode, assetIssuer] = id.split(":");
  const params = {
    assetCode,
    assetIssuer,
  };
  const query = generateQueryString(params);
  try {
    // docs -> https://developers.stellar.org/api/resources/assets/object
    var url = `https://horizon.stellar.org/assets${query}`;
    const response = await axios.get(url);
    const {
      _embedded: { records },
      _links: { self, next, prev },
    } = response.data;

    res.status(200).json({ records, self, next, prev });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch asset data" });
  }
}
