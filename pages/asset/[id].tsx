import { Container } from "@mui/material";
import { AssetList } from "@solity/components";
import { useRouter } from "next/router";

export default function Asset() {
  const id = useRouter().query.id;
  if (!id || typeof id !== "string") {
    return <></>;
  }

  return (
    <Container>
      <AssetList id={id} />
    </Container>
  );
}
