/** @jsx jsx  */
import { jsx, Card } from "theme-ui";
import { Fragment } from "react";
import Img from "gatsby-image";
import HeartIcon from "./HeartIcon";
import CommentIcon from "./CommentIcon";
import { formatNumber } from "../utils/utils";

const BasicCard = ({ post }) => {
  return (
    <Card
      key={post.id}
      variant="basic"
      sx={{
        position: "relative",
        ":hover": {
          div: {
            opacity: 1
          }
        }
      }}
    >
      <a href={`https://www.instagram.com/p/${post.id}/`}>
        <Img fluid={post.image} alt={post.caption} />
        <div
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.6)",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            opacity: 0,
            transition: "opacity 0.3s",
            color: "background"
          }}
        >
          {post.likes && (
            <Fragment>
              <HeartIcon width="1rem" height="1rem" fill="#ffffff" />
              <p
                sx={{ px: 2, fontSize: 1, fontWeight: "bold" }}
              >{`${formatNumber(post.likes)}`}</p>
            </Fragment>
          )}
          {post.comments && (
            <Fragment>
              <CommentIcon fill="#ffffff" />
              <p
                sx={{ px: 2, fontSize: 1, fontWeight: "bold" }}
              >{`${formatNumber(post.comments)}`}</p>
            </Fragment>
          )}
        </div>
      </a>
    </Card>
  );
};

export default BasicCard;
