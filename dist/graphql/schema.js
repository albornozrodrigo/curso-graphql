"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tools_1 = require("graphql-tools");
var users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@email.com'
    },
    {
        id: 2,
        name: 'Jane Doe',
        email: 'jane@email.com'
    }
];
var typeDefs = "\n\ttype User {\n\t\tid: ID!\n\t\tname: String!\n\t\temail: String\n\t}\n\n\ttype Query {\n\t\tallUsers: [User!]!\n\t}\n\n\ttype Mutation {\n\t\tcreateUser(name: String!, email: String!): User\n\t}\n";
var resolvers = {
    Query: {
        allUsers: function () { return users; }
    },
    Mutation: {
        createUser: function (parent, args) {
            var newUser = Object.assign({ id: users.length + 1 }, args);
            users.push(newUser);
            return newUser;
        }
    }
};
exports.default = graphql_tools_1.makeExecutableSchema({ typeDefs: typeDefs, resolvers: resolvers });
