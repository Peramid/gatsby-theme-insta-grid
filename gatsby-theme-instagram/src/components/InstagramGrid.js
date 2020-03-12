/** @jsx jsx  */
import { jsx, Flex, Box, useColorMode, Styled } from "theme-ui";
import { Fragment } from "react";
import Image from "gatsby-image";
import HeartIcon from "./HeartIcon";
import useInstagramPosts from "../hooks/useInstagramPosts";

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

const InstagramGrid = () => {
  const instagramPosts = useInstagramPosts();
  console.log("posts", instagramPosts);

  const [colorMode, setColorMode] = useColorMode();

  return (
    <Fragment>
      <Styled.h1>Username</Styled.h1>
      <button
        onClick={e => {
          setColorMode(colorMode === "default" ? "dark" : "default");
        }}
      >
        Dark mode
      </button>
      <Flex
        sx={{
          justifyContent: "center",
          flexFlow: "row wrap",
          alignItems: "stretch"
        }}
      >
        {instagramPosts.map(post => (
          <Box
            key={post.id}
            sx={{
              flex: "0 1 300px",
              m: 3,
              backgroundColor: "background",
              border: theme => `1px solid ${theme.colors.primary}`
            }}
          >
            <Image
              sx={{ height: "300px", maxHeight: "300px", minHeight: "300px" }}
              fluid={post.image}
            />

            <div
              sx={{
                p: 2
              }}
            >
              <p>
                <span>
                  <HeartIcon width={40} height={40} />
                </span>
                {`${formatNumber(post.likes)} likes`}
              </p>

              <p>{post.caption}</p>
            </div>
          </Box>
        ))}
      </Flex>
    </Fragment>
  );
};

export default InstagramGrid;
