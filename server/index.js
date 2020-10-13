const { ApolloServer } = require("apollo-server");

const schema = require('./schema')
const resolver = require('./resolver')

const server = new ApolloServer({typeDefs:schema, resolvers:resolver})

server.listen().then(({url})=>console.log(`Listening at ${url}`))