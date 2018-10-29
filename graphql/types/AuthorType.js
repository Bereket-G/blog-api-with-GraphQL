/**
 * Load Module Dependencies
 */

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = require('graphql');

const { ArticleType } = require('./ArticleType');
const  Article  = require('./../../models/article');

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: 'This represents a Author',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: (author) => author.id,
    },
    firstname: {
      type: GraphQLString,
      resolve: (author) => author.firstname,
    },
    lastname: {
      type: GraphQLString,
      resolve: (author) => author.lastname,
    },
    country: {
      type: GraphQLString,
      resolve: (author) => author.country,
    },
    articles: {
      type: new GraphQLList(ArticleType),
      resolve: (author) =>{
          return Article.find({author : author.id});
      },
    },
    date_of_birth: {
      type: GraphQLString,
      resolve: (author) => author.date_of_birth,
    },
    createdAt: {
      type: GraphQLString,
      resolve: (author) => author.createdAt,
    },
    updatedAt: {
      type: GraphQLString,
      resolve: (author) => author.updatedAt,
    },
  }),
});

module.exports = { AuthorType };
