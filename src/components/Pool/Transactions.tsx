import { Box, Chip, Stack, Tooltip, Typography } from "@mui/material";
import { HorizonPoolType, HorizonTransactionType } from "@solity/types/Horizon";
import SubtleHeading from "../SubtleHeading";
import DataTable from "../DataTable";
import { extractEndpointFromHref, shrinkAddress } from "@solity/helpers";
import { useState } from "react";
import { CardModal, Description } from "@solity/components";

type P = { pool: HorizonPoolType };

export default function Transactions({ pool }: P) {
  const [selected, setSelected] = useState<HorizonTransactionType>();
  return (
    <Stack spacing={1}>
      <SubtleHeading text="Transactions" />
      <DataTable<HorizonTransactionType>
        cols={[
          {
            key: "hash",
            title: "Hash",
            format: (v) => (
              <Tooltip title={v}>
                <Box>{shrinkAddress(v!.toString())}</Box>
              </Tooltip>
            ),
          },
          {
            key: "source_account",
            title: "Source",
            format: (v) => (
              <Tooltip title={v}>
                <Box>{shrinkAddress(v!.toString())}</Box>
              </Tooltip>
            ),
          },
          {
            key: "created_at",
            title: "Date",
            format: (v) => {
              const d = new Date(v as string);
              return `${d.toLocaleDateString()} - ${d.toLocaleTimeString()}`;
            },
          },
          {
            key: "fee_charged",
            title: "Fee",
            format: (v) => `${(v as number) / 100}%`,
          },
          {
            key: "successful",
            title: "Successful",
            format: (v) => (v ? "✅" : "❌"),
          },
        ]}
        onRowClick={setSelected}
        endpoint={extractEndpointFromHref(pool._links.transactions)}
        outlined
      />
      <CardModal
        open={!!selected}
        title="Transaction Detail"
        onClose={() => setSelected(undefined)}
      >
        {selected ? (
          <Stack spacing={1}>
            <Description title="Success" description={selected.successful} />
            <Description title="Hash" description={selected.hash} />
            <Description title="Ledger" description={selected.ledger} />
            <Description title="Timestamp" description={selected.created_at} />
            <Description
              title="Source Account"
              description={selected.source_account}
            />
            <Description
              title="Source Account Sequence"
              description={selected.source_account_sequence}
            />
            <Description
              title="Fee Account"
              description={selected.fee_account}
            />
            <Description
              title="Fee Charged"
              description={selected.fee_charged}
            />
            <Description title="Max Fee" description={selected.max_fee} />
            <Description
              title="Operation Count"
              description={selected.operation_count}
            />
            <Description
              title="Envelope XDR"
              description={selected.envelope_xdr}
            />
            <Description title="Result XDR" description={selected.result_xdr} />
            <Description
              title="Result Meta XDR"
              description={selected.result_meta_xdr}
            />
            <Description
              title="Fee Meta XDR"
              description={selected.fee_meta_xdr}
            />
            <Description title="Memo Type" description={selected.memo_type} />
            <SubtleHeading text="Signatures" />
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ overflowX: "auto" }}
            >
              {selected.signatures.map((s) => (
                <Chip label={s} key={s} />
              ))}
            </Stack>
            <Description
              title="Valid After"
              description={selected.valid_after}
            />
            <Description
              title="Valid Before"
              description={selected.valid_before}
            />
            <Stack>
              <SubtleHeading text="Preconditions" />
              {selected.preconditions ? (
                <Stack spacing={1}>
                  <Description
                    title="Min Time"
                    description={selected.preconditions.timebounds.min_time}
                  />
                  <Description
                    title="Max Time"
                    description={selected.preconditions.timebounds.max_time}
                  />
                </Stack>
              ) : (
                <Typography variant="body2">No Preconditions Data</Typography>
              )}
            </Stack>
          </Stack>
        ) : (
          <></>
        )}
      </CardModal>
    </Stack>
  );
}
