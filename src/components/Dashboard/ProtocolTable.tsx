import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { ProjectType } from "@solity/types/Project";
import Image from "next/image";
import { useRouter } from "next/navigation";

type P = { projects: ProjectType[] };
export default function ProtocolTable({ projects }: P) {
  const router = useRouter();

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
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((p) => (
            <TableRow
              key={p._id}
              hover
              onClick={() => router.push(`/protocols/${p.slug}`)}
            >
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
