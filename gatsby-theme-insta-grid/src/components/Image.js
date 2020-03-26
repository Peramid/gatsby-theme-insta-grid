/** @jsx jsx  */
import { jsx } from "theme-ui";
import Img from "gatsby-image";

const Image = ({ fluid, alt }) => {
  return <Img fluid={fluid} alt={alt} />;
};

export default Image;
