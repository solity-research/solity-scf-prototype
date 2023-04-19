import {
  Container,
  Stack,
  Typography,
  Skeleton,
  useTheme,
} from "@mui/material";
import { ComparisonTable } from "@solity/components/Comparison";
import useApi from "@solity/hooks/useApi";
import { ProjectType } from "@solity/types/Project";
import React from "react";

export default function index() {
  const { data, loading, error } = useApi<ProjectType[]>("protocols");
  const { palette } = useTheme();

  return (
    <Container>
      <Stack spacing={2}>
        <Stack sx={{ p: 5 }} alignItems="center" justifyContent="center">
          <Typography color={palette.text.secondary}>
            Check the protocols to see historical comparison
          </Typography>
        </Stack>
        <Stack spacing={1}>
          {loading ? (
            [1, 2, 3].map((i) => <Skeleton key={i} />)
          ) : data ? (
            <ComparisonTable projects={data} />
          ) : (
            <Typography>No data</Typography>
          )}
        </Stack>
      </Stack>
    </Container>
  );
}
