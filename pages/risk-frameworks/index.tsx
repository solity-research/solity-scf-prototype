import {
  AddCircleRounded,
  AddRounded,
  SearchOffRounded,
} from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import CrfService from "@solity/services/CrfService";
import { useMemo, useState } from "react";

export default function CustomRf() {
  const { palette } = useTheme();
  const [update, setUpdate] = useState(0);
  const service = useMemo(() => new CrfService(), []);
  const rfs = useMemo(() => service.get(), [update]);

  const create = () => {
    service.createDefault();
    setUpdate(update + 1);
  };

  return (
    <Container>
      <Stack spacing={4}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h5">My Custom Risk Frameworks</Typography>
          <IconButton onClick={create}>
            <AddCircleRounded />
          </IconButton>
        </Stack>
        {rfs.length > 0 ? (
          <Stack spacing={1}>
            {rfs.map((rf) => (
              <Card key={rf.id}>
                <CardContent>{rf.name}</CardContent>
              </Card>
            ))}
          </Stack>
        ) : (
          <Stack alignItems="center" spacing={2}>
            <SearchOffRounded
              sx={{ fontSize: 92, color: palette.text.secondary }}
            />
            <Typography color={palette.text.secondary}>
              You don't have any risk frameworks
            </Typography>
            <Button
              startIcon={<AddRounded />}
              variant="contained"
              onClick={create}
            >
              Create
            </Button>
          </Stack>
        )}
      </Stack>
    </Container>
  );
}
