const {
  createArticle,
  updateArticle,
  deleteArticle,
} = require('./ArticleMutation');
const {
  createAuthor,
  updateAuthor,
  deleteAuthor,
} = require('./AuthorMutation');

const {
    createComment,
    updateComment,
    deleteComment,
} = require('./CommentMutation');

module.exports = {
  createArticle,
  updateArticle,
  deleteArticle,
  createAuthor,
  updateAuthor,
  deleteAuthor,
  createComment,
  updateComment,
  deleteComment,
};
