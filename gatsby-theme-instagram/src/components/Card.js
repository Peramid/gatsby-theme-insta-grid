/** @jsx jsx  */
import { jsx, Box } from "theme-ui";
import Image from "./Image";
import HeartIcon from "./HeartIcon";
import { formatNumber } from "../utils/utils";

const Card = ({ post }) => {
  return (
    <Box
      key={post.id}
      sx={{
        flex: "0 1 300px",
        m: 3,
        backgroundColor: "background",
        border: theme => `1px solid ${theme.colors.primary}`
      }}
    >
      <Image fluid={post.image} alt={post.caption} />

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
  );
};

export default Card;
