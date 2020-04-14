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
    instagramPosts && (
      <Flex sx={{ variant: "styles.Flex.insta" }}>
        {instagramPosts.map(post => (
          <Card {...post} gridType={gridType} showCaption={showCaption} />
        ))}
      </Flex>
    )
  );
};

export default InstaGrid;
