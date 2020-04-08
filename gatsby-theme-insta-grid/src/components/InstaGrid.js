/** @jsx jsx  */
import { jsx, Flex } from "theme-ui";
import useInstagramPosts from "../hooks/useInstagramPosts";
import ComplexCard from "./ComplexCard";
import BasicCard from "./BasicCard";

const InstaGrid = ({ gridType = null, showCaption = false }) => {
  const instagramPosts = useInstagramPosts();

  const CardToShow = ({ post, showCaption }) => {
    if (gridType === "complex") {
      return <ComplexCard post={post} showCaption={showCaption} />;
    }
    return <BasicCard post={post} />;
  };

  return (
    <Flex
      sx={{
        justifyContent: "center",
        flexFlow: "row wrap",
        alignItems: "stretch"
      }}
    >
      {instagramPosts.map(post => (
        <CardToShow post={post} showCaption={showCaption} />
      ))}
    </Flex>
  );
};

export default InstaGrid;
