/**
 * Load other queries
 */

const { authorQuery } = require('./AuthorQuery');
const { articleQuery } = require('./ArticleQuery');
const { commentQuery } = require('./CommentQuery');

module.exports = {
    articleQuery,
    commentQuery,
    authorQuery,
};
