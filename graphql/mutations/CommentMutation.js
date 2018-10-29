const {
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');

const { CommentType } = require('../types');
const  Comment  = require('../../models/comment');

const createComment = {
  type: CommentType,
  description: 'The mutation that allows you to create a new Comment',
  args: {
    content: {
      name: 'content',
      type: new GraphQLNonNull(GraphQLString),
    },
    article: {
      name: 'article',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (value, { content, article }) => (
    Comment.create({
      content,
      article,
    })
  ),
};

const updateComment = {
  type: CommentType,
  description: 'The mutation that allows you to update an existing Comment by Id',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString),
    },
    article: {
      name: 'article',
      type: GraphQLString,
    },
    content: {
      name: 'content',
      type: GraphQLString,
    },
  },
  resolve: async (value, { id, article, content }) => {
    const foundComment = await Comment.findById(id);

    if (!foundComment) {
      throw new Error(`Comment with id: ${id} not found!`);
    }

    console.log(foundComment);
    const updatedComment = Object.assign(foundComment, {
        article,
        content,
    });

    const res_ = foundComment.updateOne(updatedComment);

    console.log(res_);

    return res_;
  },
};

const deleteComment = {
  type: CommentType,
  description: 'The mutation that allows you to delete a existing Comment by Id',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (value, { id }) => {
    const foundComment = await Comment.findById(id);

    if (!foundComment) {
      throw new Error(`Comment with id: ${id} not found!`);
    }

    await foundComment.remove();

    return foundComment;
  },
};

module.exports = {
  createComment,
  updateComment,
  deleteComment,
};
