const { User } = require("../models");

const resolvers = {
Query: {

  getSingleUser: async (_, args) => {
    await User.findOne({ email: args.email })
  },

  // Uses the ID stored in context to find logged-in user
  me: async (_, context) => {
    if (context.user) {
      return User.findOne({ _id: context.user._id }).select("-__v -password");
    } else {
      throw new AuthenticationError("Must be logged in");
    }
  }
},

Mutation: {

  createUser: async (_, args) => {
    const user = await User.create(args);
    const token = tokenTime(user);
    return { token, user };
  },

  login: async (_, { email, password }) => {
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new AuthenticationError("Login failed. Try again");
    }

    const correctPassword = await user.isCorrect(password);
    if (!correctPassword) {
      throw new AuthenticationError("Login failed. Try again");
    }

    const token = signToken(user);
    return { token, user };
  },

  saveBook: async (_, args, context) => {
    if (context.user) {
      const user = await User.findByIdAndUpdate({ _id: context.user._id }, { $push: { savedBooks: args.bookToSave } }, { new: true });
      return user;
    } else {
      throw new AuthenticationError("Must be logged in");
    }
  },

  removeBook: async (_, args, context) => {
    if (context.user) {
      const user = await User.findByIdAndUpdate({ _id: context.user._id }, { $pull: { savedBooks: { bookId: args.bookToDelete } } }, { new: true });
      return user;
    } else {
      throw new AuthenticationError("Must be logged in");
    }
  }
}
};

module.exports = resolvers;
