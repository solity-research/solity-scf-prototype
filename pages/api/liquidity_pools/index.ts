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
  const { cursor, limit, order } = req.query;
  try {
    // docs -> there are some additional query parameters that can be used:
    // https://developers.stellar.org/api/resources/list-liquidity-pools
    const params: Record<string, string> = {};
    if (cursor) params.cursor = cursor as string;
    if (limit) params.limit = limit as string;
    params.order = (order || "desc") as string;

    const query = generateQueryString(params);

    const response = await axios.get(
      "https://horizon.stellar.org/liquidity_pools" + query
    );
    const {
      _embedded: { records },
      _links: { self, next, prev },
    } = response.data;

    res.status(200).json({ records, self, next, prev });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
