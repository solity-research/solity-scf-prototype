import { HorizonPoolType } from "@solity/types/Horizon";

export default function generatePoolName(pool: HorizonPoolType) {
  const assets = pool.reserves.map((res) => res.asset);
  return assets.map((a) => a.split(":")[0]).join("-");
}
