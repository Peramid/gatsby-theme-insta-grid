/** @jsx jsx  */
import { jsx, Flex } from "theme-ui";
import useInstagramPosts from "../hooks/useInstagramPosts";
import ComplexCard from "./ComplexCard";
import BasicCard from "./BasicCard";

const InstaGrid = ({ gridType = null, showCaption = false }) => {
  const instagramPosts = useInstagramPosts();

  const Card = props => {
    if (props.gridType === "complex") {
      return <ComplexCard {...props} />;
    }
    return <BasicCard {...props} />;
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
        <Card {...post} gridType={gridType} showCaption={showCaption} />
      ))}
    </Flex>
  );
};

export default InstaGrid;
