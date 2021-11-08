const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  // Ensures we are processing only markdown files
  if (node.internal.type === 'MarkdownRemark') {
    const parent = getNode(node.parent);
    if (parent.sourceInstanceName === 'contents') {
      createNodeField({
        node,
        name: 'slug',
        value: parent.relativePath.replace(path.extname(parent.relativePath), ''),
      });
    }
  }
};

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  createPage({
    path: '/conferma/:jwt',
    matchPath: `/conferma/:jwt`,
    component: path.resolve(`./src/pages/conferma.jsx`),
  });
};
