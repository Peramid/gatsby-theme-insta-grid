/** @jsx jsx  */
import { jsx, Box } from "theme-ui";
import { Fragment } from "react";
import Image from "./Image";

const BasicGrid = ({ instagramPosts }) => {
  return (
    <Fragment>
      {instagramPosts.map(post => (
        <Box
          key={post.id}
          sx={{
            flex: "0 1 300px",
            backgroundColor: "background"
          }}
        >
          <Image fluid={post.image} alt={post.caption} />
        </Box>
      ))}
    </Fragment>
  );
};

export default BasicGrid;
