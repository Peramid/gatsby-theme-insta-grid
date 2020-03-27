/** @jsx jsx  */
import { jsx, Card } from "theme-ui";
import Img from "gatsby-image";

const BasicCard = ({ post }) => {
  return (
    <Card key={post.id} variant="basic">
      <a href={`https://www.instagram.com/p/${post.id}/`}>
        <Img fluid={post.image} alt={post.caption} />
      </a>
    </Card>
  );
};

export default BasicCard;
