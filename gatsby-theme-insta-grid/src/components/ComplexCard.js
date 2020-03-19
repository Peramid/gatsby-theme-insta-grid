/** @jsx jsx  */
import { jsx, Card, Text } from "theme-ui";
import Image from "./Image";
import HeartIcon from "./HeartIcon";
import { formatNumber } from "../utils/utils";

const ComplexCard = ({ post }) => {
  return (
    <Card
      key={post.id}
      variant="complex"
      sx={{
        flex: "0 1 300px"
      }}
    >
      <a href={`https://www.instagram.com/p/${post.id}/`}>
        <Image fluid={post.image} alt={post.caption} />
      </a>

      <Text variant="bold">
        <span>
          <HeartIcon width={40} height={40} />
        </span>
        {`${post.likes ? formatNumber(post.likes) : ""}`}
      </Text>

      <Text
        sx={{
          fontSize: 1,
          lineHeight: "body"
        }}
      >
        {post.caption}
      </Text>
    </Card>
  );
};

export default ComplexCard;
