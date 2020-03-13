/** @jsx jsx  */
import { jsx, Box } from "theme-ui";
import { Fragment } from "react";
import Img from "gatsby-image";

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
          <Img
            sx={{ width: "300px", height: "300px", objectFit: "cover" }}
            fluid={post.image}
            alt={post.caption}
          />
        </Box>
      ))}
    </Fragment>
  );
};

export default BasicGrid;
