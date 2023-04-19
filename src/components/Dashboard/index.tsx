import {
  Card,
  Container,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import useApi from "@solity/hooks/useApi";
import { ProjectType } from "@solity/types/Project";
import Image from "next/image";
import ProtocolTable from "./ProtocolTable";

const Dashboard = () => {
  const { data, loading, error } = useApi<ProjectType[]>("protocols");
  const { palette } = useTheme();

  return (
    <Container>
      <Stack spacing={2}>
        <Stack spacing={1}>
          <Typography variant="h5">Hello</Typography>
          <Typography variant="body2" color={palette.text.secondary}>
            Here are today's top protocols
          </Typography>
        </Stack>
        <Stack spacing={1}>
          {loading ? (
            [1, 2, 3].map((i) => <Skeleton key={i} />)
          ) : data ? (
            <ProtocolTable projects={data} />
          ) : (
            <Typography>No data</Typography>
          )}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Dashboard;
