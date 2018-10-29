/**
 * Load module dependencies
 */

const { GraphQLObjectType, GraphQLString } = require('graphql');

const CommentType = new GraphQLObjectType({
  name: 'Comment',
  description: 'This represents a Comment',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: (comment) => comment.id,
    },
    content: {
      type: GraphQLString,
      resolve: (comment) => comment.content,
    },
    article: {
      type: GraphQLString,
      resolve: (comment) => comment.article,
    },
    createdAt: {
      type: GraphQLString,
      resolve: (comment) => comment.createdAt,
    },
    updatedAt: {
      type: GraphQLString,
      resolve: (comment) => comment.updatedAt,
    },
  }),
});

module.exports = { CommentType };
