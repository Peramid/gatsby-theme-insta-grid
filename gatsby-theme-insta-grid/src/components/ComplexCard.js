/** @jsx jsx  */
import { jsx, Card, Text } from "theme-ui";
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
      <Text
        sx={{
          px: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start"
        }}
      >
        <div
          sx={{
            display: "flex",
            alignItems: "center",
            margin: "0",
            height: "55px"
          }}
        >
          {post.likes && (
            <Fragment>
              <HeartIcon />
              <p
                sx={{ px: 2, fontSize: 1, fontWeight: "bold" }}
              >{`${formatNumber(post.likes)}`}</p>
            </Fragment>
          )}
          {post.comments && (
            <Fragment>
              <CommentIcon />
              <p
                sx={{ px: 2, fontSize: 1, fontWeight: "bold" }}
              >{`${formatNumber(post.comments)}`}</p>
            </Fragment>
          )}
        </div>
      </Text>

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
