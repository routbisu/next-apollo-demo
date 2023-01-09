const { gql } = require('apollo-server')

const typeDefs = gql`
  type UserDetails {
    id: String!
    name: String!
    email: String!
    address: String!
    phone: String!
  }

  type Query {
    users(pageNumber: Int, pageSize: Int): [UserDetails!]!
  }
`
module.exports = typeDefs
