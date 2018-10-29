const {
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');
// const merge = require('lodash.merge');

const { ArticleType } = require('../types');
const  Article  = require('../../models/article');

const createArticle = {
  type: ArticleType,
  description: 'The mutation that allows you to create a new Article',
  args: {
    author: {
      name: 'author',
      type: new GraphQLNonNull(GraphQLString),
    },
    content: {
      name: 'content',
      type: new GraphQLNonNull(GraphQLString),
    },
    title: {
      name: 'title',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (value, { author, content, title }) => (
    Article.create({
      author,
      content,
      title,
    })
  ),
};

const updateArticle = {
  type: ArticleType,
  description: 'The mutation that allows you to update an existing Article by Id',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString),
    },
    author: {
      name: 'author',
      type: GraphQLString,
    },
    content: {
        name: 'content',
        type: GraphQLString,
    },
    title: {
        name: 'title',
        type: GraphQLString,
    },
  },
  resolve: async (value, { id, author, content,title }) => {
    const foundArticle = await Article.findById(id);

    if (!foundArticle) {
      throw new Error(`Article with id: ${id} not found!`);
    }

    console.log(foundArticle);
    const updatedArticle = Object.assign(foundArticle, {
        author,
        content,
        title,
    });

    const res_ = foundArticle.updateOne(updatedArticle);

    console.log(res_);

    return res_;
  },
};

const deleteArticle = {
  type: ArticleType,
  description: 'The mutation that allows you to delete a existing Article by Id',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (value, { id }) => {
    const foundArticle = await Article.findById(id);

    if (!foundArticle) {
      throw new Error(`Article with id: ${id} not found!`);
    }

    await foundArticle.remove();

    return foundArticle;
  },
};

module.exports = {
  createArticle,
  updateArticle,
  deleteArticle,
};
