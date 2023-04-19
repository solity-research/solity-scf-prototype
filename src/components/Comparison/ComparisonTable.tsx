import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
} from "@mui/material";
import { ProjectType } from "@solity/types/Project";
import Image from "next/image";
import { useRouter } from "next/navigation";

type P = { projects: ProjectType[] };

export default function ComparisonTable({ projects }: P) {
  return (
    <Card>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: 32 }}></TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Symbol</TableCell>
            <TableCell>Overall Score</TableCell>
            <TableCell>Price</TableCell>
            <TableCell sx={{ width: 24 }} />
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((p) => (
            <TableRow key={p._id} hover>
              <TableCell>
                <Image
                  width={32}
                  height={32}
                  src={p.logo}
                  alt={`${p.name} logo`}
                />
              </TableCell>
              <TableCell>{p.name}</TableCell>
              <TableCell>{p.symbol}</TableCell>
              <TableCell>{p.score.overall}</TableCell>
              <TableCell>
                {p.price.current} (+{p.price.change})
              </TableCell>
              <TableCell>
                <Checkbox />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
