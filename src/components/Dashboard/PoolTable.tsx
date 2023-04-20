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
        { title: "Type", key: "type" },
        { title: "Fee", key: "fee_bp" },
        { title: "Total Shares", key: "total_shares" },
      ]}
      endpoint="liquidity_pools"
      onRowClick={(p) => router.push(`/pools/${p.id}`)}
    />
  );
}
