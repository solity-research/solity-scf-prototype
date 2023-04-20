import { Button, ButtonGroup, Container, Stack } from "@mui/material";
import { SolityLogo } from "@solity/components";
import routes from "@solity/routes";
import { usePathname, useRouter } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <Stack spacing={4} sx={{ pt: 4 }}>
      <Container>
        <Stack direction="row" justifyContent="space-between">
          <SolityLogo dark wide width={240} />
          <Stack direction="row">
            <ButtonGroup>
              {routes.map((r) => (
                <Button
                  key={r.key}
                  onClick={() => router.push(r.path)}
                  variant={pathname === r.path ? "contained" : "outlined"}
                >
                  {r.name}
                </Button>
              ))}
            </ButtonGroup>
          </Stack>
        </Stack>
      </Container>
      <Stack>{children}</Stack>
    </Stack>
  );
}
