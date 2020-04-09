/** @jsx jsx  */
import { jsx, Card } from "theme-ui";
import { Fragment } from "react";
import Img from "gatsby-image";
import HeartIcon from "./HeartIcon";
import CommentIcon from "./CommentIcon";
import NumberText from "./NumberText";
import { formatNumber } from "../utils/utils";

const BasicCard = ({ id, caption, likes, comments, image }) => {
  return (
    <Card key={id} variant="basic">
      <a href={`https://www.instagram.com/p/${id}/`}>
        <Img fluid={image} alt={caption} />
        <div
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.4)",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            opacity: 0,
            transition: "opacity 0.3s"
          }}
        >
          {likes && (
            <Fragment>
              <HeartIcon fill="#ffffff" />
              <NumberText color="#ffffff">{`${formatNumber(
                likes
              )}`}</NumberText>
            </Fragment>
          )}
          {comments && (
            <Fragment>
              <CommentIcon fill="#ffffff" />
              <NumberText color="#ffffff">{`${formatNumber(
                comments
              )}`}</NumberText>
            </Fragment>
          )}
        </div>
      </a>
    </Card>
  );
};

export default BasicCard;
