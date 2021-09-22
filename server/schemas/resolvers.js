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
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });
			if (!user) {
				throw new AuthenticationError("Incorrect email or password!");
			}
			const correctPassword = user.isCorrectPassword(password);
			if (!correctPassword) {
				throw new AuthenticationError("Wrong signon credentials");
			}
			const token = signToken(user);
			return { token, user };
		},
		saveBook: async (parent, { user, body }) => {
			try {
				const book = await User.findOneAndUpdate(
					{ username: user._id },
					{ $addToSet: { savedBooks: body } },
					{ new: true, runValidators: true }
				);
			} catch (e) {
				return `Unable to saveBook due to error: ${e}`;
			}
		},
	},
};

module.exports = resolvers;
