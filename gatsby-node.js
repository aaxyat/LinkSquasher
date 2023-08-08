const path = require('path');
const redirects = require('./data/redirects.json');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  redirects.forEach((redirect) => {
    createPage({
      path: redirect.shortUrl,
      component: path.resolve(`./src/templates/redirect.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: redirect.shortUrl,
        url: redirect.longUrl,
      },
    });
  });
};
