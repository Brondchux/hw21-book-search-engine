const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
	Query: {
		users: async () => {
			return User.find({});
		},
		books: async (parent, { username }) => {
			const user = User.findOne({ username }).populate("savedBooks");
			const { savedBooks } = user;
			return savedBooks;
		},
	},
	Mutation: {
		addUser: async (parent, { username, email, password }) => {
			const user = await User.create({ username, email, password });
			const token = signToken(user);
			return { token, user };
		},
	},
};

module.exports = resolvers;
