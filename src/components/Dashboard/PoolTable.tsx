import { generatePoolName } from "@solity/helpers";
import { HorizonPoolType } from "@solity/types/Horizon";
import { useRouter } from "next/navigation";
import DataTable from "../DataTable";

export default function PoolsTable() {
  const router = useRouter();

  return (
    <DataTable<HorizonPoolType>
      cols={[
        {
          title: "Pair",
          key: undefined,
          format: (_, p) => generatePoolName(p),
        },
        { title: "Fee", key: "fee_bp", format: (v) => `${v / 100}%` },
        {
          title: "Last Update",
          key: "last_modified_time",
          format: (v) => new Date(v).toLocaleDateString(),
        },
      ]}
      endpoint="liquidity_pools"
      onRowClick={(p) => router.push(`/pools/${p.id}`)}
    />
  );
}
