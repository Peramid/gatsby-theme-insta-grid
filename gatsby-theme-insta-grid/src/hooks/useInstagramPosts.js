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
          comments
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
    id: node.id,
    username: node.username,
    caption: node.caption,
    likes: node.likes,
    comments: node.comments,
    image: node.localFile.childImageSharp.fluid
  }));
};

export default useInstagramPosts;
