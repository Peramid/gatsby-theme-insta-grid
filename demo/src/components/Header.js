/** @jsx jsx */
import { jsx } from "theme-ui";

const Header = () => {
  return (
    <header
      sx={{
        backgroundColor: "primary"
      }}
    >
      <div
        sx={{
          variant: "styles.h2",
          py: 3,
          mx: "auto",
          maxWidth: 980,
          width: "90vw",
          color: "background",
          fontWeight: "bold"
        }}
      >
        Gatsby Theme Insta Grid
      </div>
    </header>
  );
};

export default Header;
