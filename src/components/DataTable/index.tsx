import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CircularProgress,
  Stack,
  IconButton,
} from "@mui/material";
import { extractEndpointFromHref } from "@solity/helpers";
import useApi from "@solity/hooks/useApi";
import { HorizonListResponseType } from "@solity/types/Horizon";
import { useState } from "react";

type P<T> = {
  endpoint: string;
  outlined?: boolean;
  onRowClick?: (data: T) => void;
  cols: {
    key?: keyof T;
    title: string;
    format?: (
      value: string | number | boolean | undefined,
      data: T
    ) => string | React.ReactNode;
  }[];
};
export default function DataTable<T extends { id: string }>({
  endpoint,
  outlined,
  cols,
  onRowClick,
}: P<T>) {
  const [ep, setEp] = useState(endpoint);
  const { data, loading, error } = useApi<HorizonListResponseType<T>>(ep);

  const PaginationRow = () => (
    <TableRow>
      <TableCell colSpan={cols.length}>
        <Stack
          spacing={1}
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <IconButton
            onClick={() => data && setEp(extractEndpointFromHref(data.prev))}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            onClick={() => data && setEp(extractEndpointFromHref(data.next))}
          >
            <ChevronRight />
          </IconButton>
        </Stack>
      </TableCell>
    </TableRow>
  );

  return (
    <Card variant={outlined ? "outlined" : "elevation"}>
      <Table>
        <TableHead>
          <TableRow>
            {cols.map((c) => (
              <TableCell>{c.title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {!loading && !error && data && data.records.length > 0 ? (
            <>
              {data.records.map((p) => (
                <TableRow
                  key={p.id}
                  hover={!!onRowClick}
                  onClick={() => onRowClick && onRowClick(p)}
                >
                  {cols.map((c) => {
                    const value = c.key
                      ? (p[c.key] as string | number)
                      : undefined;
                    return (
                      <TableCell>
                        {c.format ? c.format(value, p) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
              <PaginationRow />
            </>
          ) : (
            <>
              <TableRow>
                <TableCell colSpan={cols.length}>
                  <Stack alignItems="center">
                    {loading ? (
                      <CircularProgress />
                    ) : error ? (
                      error.message
                    ) : (
                      "No Data"
                    )}
                  </Stack>
                </TableCell>
              </TableRow>
              {!loading && <PaginationRow />}
            </>
          )}
        </TableBody>
      </Table>
    </Card>
  );
}
