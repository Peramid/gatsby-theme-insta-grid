/** @jsx jsx  */
import { jsx } from "theme-ui";
import Img from "gatsby-image";

const Image = ({ fluid, alt }) => {
  return (
    <Img
      sx={{ width: "300px", height: "300px", objectFit: "cover" }}
      fluid={fluid}
      alt={alt}
    />
  );
};

export default Image;
