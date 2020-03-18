/** @jsx jsx  */
import { jsx, Flex } from "theme-ui";
import useInstagramPosts from "../hooks/useInstagramPosts";
import ComplexGrid from "./ComplexGrid";
import BasicGrid from "./BasicGrid";

const InstaGrid = ({ gridType = null }) => {
  const instagramPosts = useInstagramPosts();
  console.log("posts", instagramPosts);

  return (
    <Flex
      sx={{
        justifyContent: "center",
        flexFlow: "row wrap",
        alignItems: "stretch",
        p: 3
      }}
    >
      {gridType === "complex" ? (
        <ComplexGrid instagramPosts={instagramPosts} />
      ) : (
        <BasicGrid instagramPosts={instagramPosts} />
      )}
    </Flex>
  );
};

export default InstaGrid;
