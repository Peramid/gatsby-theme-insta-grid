/** @jsx jsx */
import { jsx } from "theme-ui";

const Hero = () => {
  return (
    <section
      sx={{
        backgroundColor: "primary",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "75vh",
        py: "50px",
      }}
    >
      <div
        sx={{
          maxWidth: 980,
          width: "90vw",
          m: "0 auto",
          color: "background",
        }}
      >
        <h1 sx={{ fontSize: "5rem" }}>Gatsby Theme Insta Grid</h1>
        <code>yarn add @melanienolan/gatsby-theme-insta-grid</code>
      </div>
    </section>
  );
};

export default Hero;
