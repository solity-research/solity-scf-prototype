import { HorizonPoolType } from "@solity/types/Horizon";

export default function generatePoolName(pool: HorizonPoolType) {
  const assets = pool.reserves.map((res) => res.asset);
  const names = assets.map((a) => a.split(":")[0]);
  return names.map((n) => (n === "native" ? "XLM" : n)).join(" / ");
}
