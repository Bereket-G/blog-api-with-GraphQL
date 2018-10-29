const {
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');

const { AuthorType } = require('../types');
const  Author  = require('../../models/author');

const createAuthor = {
    type: AuthorType,
    description: 'The mutation that allows you to create a new Author',
    args: {
      firstname: {
            name: 'firstname',
            type: new GraphQLNonNull(GraphQLString),
        },
      lastname: {
            name: 'lastname',
            type: new GraphQLNonNull(GraphQLString),
        },
      country: {
            name: 'country',
            type: new GraphQLNonNull(GraphQLString),
        },
      date_of_birth: {
            name: 'date_of_birth',
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    resolve: (value, { firstname, lastname, country , date_of_birth  }) => (
        Author.create({
            firstname,
            lastname,
            country ,
            date_of_birth
        })
    ),
};


const updateAuthor = {
  type: AuthorType,
  description: 'The mutation that allows you to update an existing Author by Id',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString),
    },
    firstname: {
      name: 'firstname',
      type: GraphQLString,
    },
    lastname: {
      name: 'lastname',
      type: GraphQLString,
    },
    country: {
        name: 'country',
        type: GraphQLString,
    },
    date_of_birth: {
        name: 'date_of_birth',
        type: GraphQLString,
    },
  },
  resolve: async (author, { id, firstname, lastname, country , date_of_birth }) => {
    const foundAuthor = await Author.findById(id);

    if (!foundAuthor) {
      throw new Error(`Author with id: ${id} not found!`);
    }

    const updatedAuthor = Object.assign(foundAuthor, {
        firstname,
        lastname,
        country,
        date_of_birth
    });

    return foundAuthor.updateOne(updatedAuthor);
  },
};

const deleteAuthor = {
  type: AuthorType,
  description: 'The mutation that allows you to delete a existing Author by Id',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (author, { id }) => {
    const foundAuthor = await Author.findById(id);

    if (!foundAuthor) {
      throw new Error(`Author with id: ${id} not found!`);
    }
      
    await foundAuthor.remove();

    return foundAuthor;
  },
};

module.exports = {
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
