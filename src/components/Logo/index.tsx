import { useTheme } from "@mui/material";
import Image, { ImageProps } from "next/image";
import logoWideDark from "public/img/logo-wd-dark.png";
import logoWide from "public/img/logo-wd.png";
import logo from "public/img/logo.png";

type P = Omit<ImageProps, "alt" | "src"> & {
  wide?: boolean;
  dark?: boolean;
};

const Logo = ({ wide, dark, ...props }: P) => {
  const {
    palette: { mode },
  } = useTheme();
  const isDark = dark !== undefined ? dark : mode === "dark";
  return (
    <Image
      {...props}
      alt="solity-logo"
      src={wide ? (isDark ? logoWideDark : logoWide) : logo}
    />
  );
};

export default Logo;
