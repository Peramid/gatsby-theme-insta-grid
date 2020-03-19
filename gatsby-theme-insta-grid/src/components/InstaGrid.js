/** @jsx jsx  */
import { jsx, Flex } from "theme-ui";
import useInstagramPosts from "../hooks/useInstagramPosts";
import ComplexCard from "./ComplexCard";
import BasicCard from "./BasicCard";

const InstaGrid = ({ gridType = null }) => {
  const instagramPosts = useInstagramPosts();
  console.log("posts", instagramPosts);
  const CardToShow = ({ post }) => {
    if (gridType === "complex") {
      return <ComplexCard post={post} />;
    }
    return <BasicCard post={post} />;
  };

  return (
    <Flex
      sx={{
        justifyContent: "center",
        flexFlow: "row wrap",
        alignItems: "stretch",
        p: 3
      }}
    >
      {instagramPosts.map(post => (
        <CardToShow post={post} />
      ))}
    </Flex>
  );
};

export default InstaGrid;
