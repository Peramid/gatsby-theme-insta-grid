/** @jsx jsx  */
import { jsx, Flex } from "theme-ui";
import useInstagramPosts from "../hooks/useInstagramPosts";
import ComplexGrid from "./ComplexGrid";
import BasicGrid from "./BasicGrid";

const InstagramGrid = () => {
  const instagramPosts = useInstagramPosts();
  console.log("posts", instagramPosts);

  return (
    <Flex
      sx={{
        justifyContent: "center",
        flexFlow: "row wrap",
        alignItems: "stretch"
      }}
    >
      <ComplexGrid instagramPosts={instagramPosts} />
      <BasicGrid instagramPosts={instagramPosts} />
    </Flex>
  );
};

export default InstagramGrid;
