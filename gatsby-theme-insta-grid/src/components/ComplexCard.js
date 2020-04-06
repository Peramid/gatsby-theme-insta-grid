/** @jsx jsx  */
import { jsx, Card, Text, Flex } from "theme-ui";
import { Fragment } from "react";
import Img from "gatsby-image";
import HeartIcon from "./HeartIcon";
import CommentIcon from "./CommentIcon";
import { formatNumber } from "../utils/utils";

const ComplexCard = ({ post }) => {
  return (
    <Card key={post.id} variant="complex">
      <a
        sx={{
          display: "block"
        }}
        href={`https://www.instagram.com/p/${post.id}/`}
      >
        <Img fluid={post.image} alt={post.caption} />
      </a>
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "flex-end"
        }}
      >
        {post.likes && (
          <Fragment>
            <HeartIcon />
            <p sx={{ px: 2, fontSize: 2, fontWeight: "bold" }}>{`${formatNumber(
              post.likes
            )}`}</p>
          </Fragment>
        )}
        {post.comments && (
          <Fragment>
            <CommentIcon />
            <p sx={{ px: 2, fontSize: 2, fontWeight: "bold" }}>{`${formatNumber(
              post.comments
            )}`}</p>
          </Fragment>
        )}
      </Flex>

      <Text
        sx={{
          fontSize: 1,
          lineHeight: "body",
          wordBreak: "break-word"
        }}
      >
        {post.caption}
      </Text>
    </Card>
  );
};

export default ComplexCard;
