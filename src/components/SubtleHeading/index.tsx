import { Typography, useTheme } from "@mui/material";

const SubtleHeading = ({ text }: { text: string }) => {
  const { palette } = useTheme();
  return (
    <Typography variant="caption" color={palette.text.secondary}>
      {text.toUpperCase()}
    </Typography>
  );
};

export default SubtleHeading;
