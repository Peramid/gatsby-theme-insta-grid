/** @jsx jsx  */
import { jsx, Card, Text, Flex, useThemeUI } from "theme-ui";
import { Fragment } from "react";
import Img from "gatsby-image";
import HeartIcon from "./HeartIcon";
import CommentIcon from "./CommentIcon";
import NumberText from "./NumberText";
import { formatNumber } from "../utils/utils";

const ComplexCard = ({ post, showCaption }) => {
  const { theme } = useThemeUI();

  return (
    <Card key={post.id} variant="complex">
      <a href={`https://www.instagram.com/p/${post.id}/`}>
        <Img fluid={post.image} alt={post.caption} />
      </a>
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "flex-end",
          py: 2
        }}
      >
        {post.likes && (
          <Fragment>
            <HeartIcon fill={theme.colors.text} />
            <NumberText color={theme.colors.text}>
              {`${formatNumber(post.likes)}`}
            </NumberText>
          </Fragment>
        )}
        {post.comments && (
          <Fragment>
            <CommentIcon fill={theme.colors.text} />
            <NumberText color={theme.colors.text}>{`${formatNumber(
              post.comments
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
          {post.caption}
        </Text>
      )}
    </Card>
  );
};

export default ComplexCard;
