import {
  Container,
  Skeleton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import PoolsTable from "./PoolTable";

const Dashboard = () => {
  const { palette } = useTheme();

  return (
    <Container>
      <Stack spacing={2}>
        <Stack spacing={1}>
          <Typography variant="h5">Hello</Typography>
          <Typography variant="body2" color={palette.text.secondary}>
            Here are today's top pools on Stellar
          </Typography>
        </Stack>
        <PoolsTable />
      </Stack>
    </Container>
  );
};

export default Dashboard;
