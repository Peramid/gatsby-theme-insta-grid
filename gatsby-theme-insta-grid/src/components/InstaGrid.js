/** @jsx jsx  */
import { jsx, Flex } from "theme-ui";
import useInstagramPosts from "../hooks/useInstagramPosts";
import ComplexCard from "./ComplexCard";
import BasicCard from "./BasicCard";

const InstaGrid = ({ cardType = null, showCaptions = false }) => {
  const instagramPosts = useInstagramPosts();

  const Card = (props) => {
    if (props.cardType === "complex") {
      return <ComplexCard {...props} />;
    }
    return <BasicCard {...props} />;
  };

  return (
    instagramPosts && (
      <Flex sx={{ variant: "styles.Flex.insta" }}>
        {instagramPosts.map((post) => (
          <Card {...post} cardType={cardType} showCaptions={showCaptions} />
        ))}
      </Flex>
    )
  );
};

export default InstaGrid;
