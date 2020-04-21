/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

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
        <Styled.h1>Gatsby Theme Insta Grid</Styled.h1>
        <Styled.code>
          yarn add @melanienolan/gatsby-theme-insta-grid
        </Styled.code>
      </div>
    </section>
  );
};

export default Hero;
