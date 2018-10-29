const {
  GraphQLString,
  GraphQLList,
} = require('graphql');

const { CommentType } = require('../types');
const  Comment  = require('../../models/comment');

const commentQuery = {
  type: new GraphQLList(CommentType),
  args: {
    id: {
      name: 'id',
      type: GraphQLString,
    },
    content: {
      name: 'content',
      type: GraphQLString,
    },
    article: {
      name: 'article',
      type: GraphQLString,
    },
    createdAt: { // Todo add author of comment field wiz default anonymous 
      name: 'createdAt',
      type: GraphQLString,
    },
    updatedAt: {
      name: 'updatedAt',
      type: GraphQLString,
    },
  },
  resolve: (user, args) => Comment.find({}),
};

module.exports = { commentQuery };
