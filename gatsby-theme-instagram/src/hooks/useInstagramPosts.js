import {useStaticQuery, graphql} from 'gatsby';

const useInstagramPosts = () => {
    const data = useStaticQuery(graphql`
        {
            allInstaNode {
                nodes {
                    id
                    username
                    caption
                    localFile {
                        childImageSharp {
                            fluid {
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
        username: node.username
    }));
};

export default useInstagramPosts;
