import { CircularProgress, Container, Stack, Typography } from "@mui/material";
import { ProtocolDetail } from "@solity/components";
import useApi from "@solity/hooks/useApi";
import { ProjectType } from "@solity/types/Project";
import { useRouter } from "next/router";

export default function Protocol() {
  const slug = useRouter().query.id;
  const { data, loading, error } = useApi<ProjectType>(`protocols/${slug}`);

  return (
    <Container>
      <Stack spacing={2}>
        {loading ? (
          <CircularProgress />
        ) : data ? (
          <ProtocolDetail protocol={data} />
        ) : (
          <Typography>No data</Typography>
        )}
      </Stack>
    </Container>
  );
}
