const {
  GraphQLString,
  GraphQLList,
} = require('graphql');

const { AuthorType } = require('../types');
const  Author = require('../../models/author');

const AuthorQuery = {
  type: new GraphQLList(AuthorType),
  args: {
    id: {
      name: 'id',
      type: GraphQLString,
    },
    firstname: {
      name: 'first_name',
      type: GraphQLString,
    },
    lastname: {
      name: 'last_name',
      type: GraphQLString,
    },
    country: {
      name: 'country',
      type: GraphQLString,
    },
    articles: {
      name: 'articles',
      type: GraphQLString,
    },
    createdAt: {
      name: 'createdAt',
      type: GraphQLString,
    },
    updatedAt: {
      name: 'updatedAt',
      type: GraphQLString,
    },
  },
  resolve: (author, args) => Author.find({})
      .populate("articles"),
};

module.exports = { authorQuery : AuthorQuery };
