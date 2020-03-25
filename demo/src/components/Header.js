/** @jsx jsx */
import { jsx } from "theme-ui";

const Header = () => {
  return (
    <header
      sx={{
        my: 4,
        mx: "auto",
        maxWidth: 980,
        width: "90vw",
        backgroundColor: "primary"
      }}
    >
      Gatsby Theme Insta Grid
    </header>
  );
};

export default Header;
