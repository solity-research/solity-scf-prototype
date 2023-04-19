import type { NextApiRequest, NextApiResponse } from "next";
import ServerAuthService from "@solity/services/ServerAuthService";

/**
 * Attempts to login with username and password
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { username, password, token } = req.body;
  try {
    const data = await ServerAuthService.login();
    res.status(200).json(data);
  } catch (e: any) {
    res.status(400).send(JSON.stringify(e));
  }
}
