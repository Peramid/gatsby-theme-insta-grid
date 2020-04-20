/** @jsx jsx  */
import { jsx, Card, Text, Flex, useThemeUI } from "theme-ui";
import { Fragment } from "react";
import Img from "gatsby-image";
import HeartIcon from "./HeartIcon";
import CommentIcon from "./CommentIcon";
import Numbers from "./Numbers";
import { formatNumber } from "../utils/utils";

const ComplexCard = ({ id, caption, likes, comments, image, showCaptions }) => {
  const { theme } = useThemeUI();

  return (
    <Card key={id} variant="complex">
      <a href={`https://www.instagram.com/p/${id}/`}>
        <Img fluid={image} alt={caption} />
      </a>
      <Flex>
        {likes && (
          <Fragment>
            <HeartIcon fill={theme.colors.text} />
            <Numbers color={theme.colors.text}>
              {`${formatNumber(likes)}`}
            </Numbers>
          </Fragment>
        )}
        {comments && (
          <Fragment>
            <CommentIcon fill={theme.colors.text} />
            <Numbers color={theme.colors.text}>{`${formatNumber(
              comments
            )}`}</Numbers>
          </Fragment>
        )}
      </Flex>
      {showCaptions && <Text variant="caption">{caption}</Text>}
    </Card>
  );
};

export default ComplexCard;
