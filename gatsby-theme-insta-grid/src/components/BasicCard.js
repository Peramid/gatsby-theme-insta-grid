/** @jsx jsx  */
import { jsx, Card, Flex } from "theme-ui";
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
        <Flex sx={{ variant: "styles.Flex.overlay" }}>
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
        </Flex>
      </a>
    </Card>
  );
};

export default BasicCard;
