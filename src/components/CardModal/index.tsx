import {
  Card,
  CardContent,
  CardHeader,
  Modal,
  ModalProps,
  Stack,
} from "@mui/material";

type P = ModalProps & { title?: string };

const CardModal = ({ children, title, ...props }: P) => (
  <Modal {...props}>
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card sx={{ width: 600, maxHeight: "90vh", overflow: "auto" }}>
        {title && <CardHeader title={title} />}
        <CardContent>{children}</CardContent>
      </Card>
    </Stack>
  </Modal>
);

export default CardModal;
