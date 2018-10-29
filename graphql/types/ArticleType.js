const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require('graphql');

const { CommentType } = require('./CommentType');
const Comment = require("../../models/comment");

const ArticleType = new GraphQLObjectType({
  name: 'Article',
  description: 'This represents a Article',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: (article) => article.id,
    },
    title: {
      type: GraphQLString,
      resolve: (article) => article.title,
    },
    author: {
      type: GraphQLString,
      resolve: (article) => article.author,
    },
    content: {
      type: GraphQLString,
      resolve: (article) => article.content,
    },
    comments: {
      type: new GraphQLList(CommentType),
      resolve: (article) => {
        return Comment.find({article: article.id})
      },
    },
    date_of_birth: {
      type: GraphQLString,
      resolve: (article) => article.date_of_birth,
    },
    createdAt: {
      type: GraphQLString,
      resolve: (article) => article.createdAt,
    },
    updatedAt: {
      type: GraphQLString,
      resolve: (article) => article.updatedAt,
    },
  }),
});

module.exports = { ArticleType };
