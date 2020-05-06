const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => { // eslint-disable-line
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString())); // eslint-disable-line
      return Promise.reject(result.errors);
    }

    const pages = result.data.allMarkdownRemark.edges.filter(
      ({ node }) => !!node.frontmatter.templateKey,
    );

    pages.forEach(edge => {
      let component;
      let pathName;
      if (edge.node.frontmatter.templateKey === 'index-page') {
        pathName = '/';
        component = path.resolve(`src/templates/index-page.jsx`);
      } else {
        pathName = edge.node.frontmatter.path || edge.node.fields.slug;
        component = path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.jsx`,
        );
      }
      const { id } = edge.node;
      createPage({
        path: pathName,
        component,
        // additional data can be passed via context
        context: {
          id,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  fmImagesToRelative(node);

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
