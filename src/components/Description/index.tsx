import { Stack, Tooltip, Typography } from "@mui/material";
import SubtleHeading from "../SubtleHeading";

type P = {
  title: string;
  description?: string | number | boolean;
  tooltip?: string;
  horizontal?: boolean;
};

export default function Description({
  title,
  description,
  tooltip,
  horizontal,
}: P) {
  const DescriptionText = () => (
    <Typography variant="body2" sx={{ overflowX: "auto" }}>
      {description === undefined
        ? "N/A"
        : typeof description === "boolean"
        ? description
          ? "Yes"
          : "No"
        : description}
    </Typography>
  );
  return horizontal ? (
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <Typography>{title}</Typography>
      <Typography>{description}</Typography>
    </Stack>
  ) : (
    <Stack>
      <SubtleHeading text={title} />
      {tooltip ? (
        <Tooltip title={tooltip}>
          <DescriptionText />
        </Tooltip>
      ) : (
        <DescriptionText />
      )}
    </Stack>
  );
}
