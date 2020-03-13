import { useStaticQuery, graphql } from "gatsby";

const useInstagramPosts = () => {
  const data = useStaticQuery(graphql`
    {
      allInstaNode {
        nodes {
          id
          username
          caption
          likes
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `);
  return data.allInstaNode.nodes.map(node => ({
    image: node.localFile.childImageSharp.fluid,
    id: node.id,
    caption: node.caption,
    likes: node.likes,
    username: node.username
  }));
};

export default useInstagramPosts;
