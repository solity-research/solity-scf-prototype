import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

/**
 * Fetches protocols list
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { id } = req.query;
  try {
    // docs -> https://developers.stellar.org/api/resources/retrieve-a-liquidity-pool
    const response = await axios.get(
      `https://horizon.stellar.org/liquidity_pools/${id}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch liquidity pool data" });
  }
}
