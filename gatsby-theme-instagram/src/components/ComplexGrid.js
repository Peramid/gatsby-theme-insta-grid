/** @jsx jsx  */
import { jsx, Box } from "theme-ui";
import { Fragment } from "react";
import Image from "gatsby-image";
import HeartIcon from "./HeartIcon";

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

const ComplexGrid = ({ instagramPosts }) => {
  return (
    <Fragment>
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
            sx={{ width: "300px", height: "300px", objectFit: "cover" }}
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
    </Fragment>
  );
};

export default ComplexGrid;
