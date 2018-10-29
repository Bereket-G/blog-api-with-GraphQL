/**
 * Load module dependencies  
 */
const { GraphQLSchema, GraphQLObjectType } = require('graphql');

const { authorQuery, articleQuery, commentQuery }       = require('./queries');
const { createAuthor, updateAuthor, deleteAuthor }     = require('./mutations');

const { createArticle, updateArticle, deleteArticle, } = require('./mutations');

const { createComment, updateComment, deleteComment, } = require('./mutations');


const RootQuery = new GraphQLObjectType({
    name: 'rootQuery',
    description: 'This is the root query which holds all possible READ entrypoints for the GraphQL API',
    fields: () => ({
        author  : authorQuery,
        article : articleQuery,
        comment : commentQuery,
    }),
});

const RootMutation = new GraphQLObjectType({
    name: 'rootMutation',
    description: 'This is the root mutation which holds all possible WRITE entrypoints for the GraphQL API',
    fields: () => ({
        createAuthor, updateAuthor, deleteAuthor,
        createArticle, updateArticle, deleteArticle,
        createComment, updateComment, deleteComment
    }),
});

const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation,
});

module.exports = { schema };
