/** @jsx jsx  */
import { jsx, Card } from "theme-ui";
import Image from "./Image";

const BasicCard = ({ post }) => {
  return (
    <Card key={post.id} variant="basic">
      <a href={`https://www.instagram.com/p/${post.id}/`}>
        <Image fluid={post.image} alt={post.caption} />
      </a>
    </Card>
  );
};

export default BasicCard;
