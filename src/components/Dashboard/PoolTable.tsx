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
          title: "Name",
          key: undefined,
          format: (_, p) => generatePoolName(p),
        },
        { title: "Fee", key: "fee_bp", format: (v) => v + " XLM" },
        { title: "Total Shares", key: "total_shares" },
        { title: "Last Update", key: "last_modified_time" },
      ]}
      endpoint="liquidity_pools"
      onRowClick={(p) => router.push(`/pools/${p.id}`)}
    />
  );
}
