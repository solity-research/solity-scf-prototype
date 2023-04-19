import { Stack, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { SolityLogo } from "@solity/components";

export default function Home() {
  return (
    <Container>
      <Stack
        sx={{ height: "99vh" }}
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <SolityLogo dark />
        <Typography variant="h1">WIP</Typography>
      </Stack>
    </Container>
  );
}
