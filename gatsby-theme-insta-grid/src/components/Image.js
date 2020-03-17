/** @jsx jsx  */
import { jsx } from "theme-ui";
import Img from "gatsby-image";

const Image = ({ fluid, alt }) => {
  return (
    <Img
      sx={{ width: "100%", height: "300px", objectFit: "cover" }}
      fluid={fluid}
      alt={alt}
    />
  );
};

export default Image;
