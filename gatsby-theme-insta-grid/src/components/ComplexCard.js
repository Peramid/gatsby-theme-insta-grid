/** @jsx jsx  */
import { jsx, Card, Text, Flex, useThemeUI } from "theme-ui";
import { Fragment } from "react";
import Img from "gatsby-image";
import HeartIcon from "./HeartIcon";
import CommentIcon from "./CommentIcon";
import NumberText from "./NumberText";
import { formatNumber } from "../utils/utils";

const ComplexCard = ({ id, caption, likes, comments, image, showCaption }) => {
  const { theme } = useThemeUI();

  return (
    <Card key={id} variant="complex">
      <a href={`https://www.instagram.com/p/${id}/`}>
        <Img fluid={image} alt={caption} />
      </a>
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "flex-end",
          py: 2
        }}
      >
        {likes && (
          <Fragment>
            <HeartIcon fill={theme.colors.text} />
            <NumberText color={theme.colors.text}>
              {`${formatNumber(likes)}`}
            </NumberText>
          </Fragment>
        )}
        {comments && (
          <Fragment>
            <CommentIcon fill={theme.colors.text} />
            <NumberText color={theme.colors.text}>{`${formatNumber(
              comments
            )}`}</NumberText>
          </Fragment>
        )}
      </Flex>
      {showCaption && (
        <Text
          sx={{
            fontSize: 1,
            lineHeight: "body",
            wordBreak: "break-word",
            color: theme.colors.text
          }}
        >
          {caption}
        </Text>
      )}
    </Card>
  );
};

export default ComplexCard;
