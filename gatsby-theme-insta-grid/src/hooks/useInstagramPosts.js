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
              fluid(maxWidth: 300, maxHeight: 300) {
                ...GatsbyImageSharpFluid_withWebp
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
