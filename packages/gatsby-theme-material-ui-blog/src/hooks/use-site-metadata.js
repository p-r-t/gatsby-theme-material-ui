import { graphql, useStaticQuery } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          social {
            twitter
            github
            instagram
          }
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
