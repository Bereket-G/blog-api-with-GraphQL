const {
    GraphQLString,
    GraphQLList,
} = require('graphql');

const { ArticleType } = require('../types');
const  Article = require('../../models/article');

const ArticleQuery = {
    type: new GraphQLList(ArticleType),
    args: {
        id: {
            name: 'id',
            type: GraphQLString,
        },
        title: {
            name: 'title',
            type: GraphQLString,
        },
        content: {
            name: 'content',
            type: GraphQLString,
        },
        author: {
            name: 'author',
            type: GraphQLString,
        },
        comments: {
            name: 'comments',
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
    resolve: (article, args) => Article.find({}),
};

module.exports = { articleQuery : ArticleQuery };
