/** @jsx jsx */
import { jsx } from "theme-ui";

const Footer = () => {
  return (
    <footer
      sx={{
        py: 3,
        mx: "auto",
        maxWidth: 980,
        width: "90vw",
        color: "primary",
        textAlign: "center",
      }}
    >
      &copy; Melanie Nolan 2020
    </footer>
  );
};

export default Footer;
