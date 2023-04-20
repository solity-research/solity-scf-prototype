import { CircularProgress, Container, Stack, Typography } from "@mui/material";
import { PoolDetail } from "@solity/components";
import { useRouter } from "next/router";

export default function Pool() {
  const id = useRouter().query.id;
  if (!id || typeof id !== "string") {
    return <></>;
  }

  return (
    <Container>
      <PoolDetail id={id} />
    </Container>
  );
}
