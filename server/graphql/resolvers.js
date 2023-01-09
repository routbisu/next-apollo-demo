const casual = require('casual')
const { v4: uuidv4 } = require('uuid')

// Define casual custom users types
casual.define('user', function () {
  return {
    name: casual.name,
    email: casual.email,
    address: casual.address,
    phone: casual.phone
  }
})

// Get a list of fake 2000 users
const fakeUsers = Array.from({ length: 2000 }, (_, idx) => ({
  id: uuidv4(),
  ...casual.user
}))

// Resolver functions for schema field: User
const resolvers = {
  Query: {
    users: (_, { pageNumber = 1, pageSize = 20 }) =>
      fakeUsers.slice(
        (pageNumber - 1) * pageSize,
        (pageNumber - 1) * pageSize + pageSize
      )
  }
}

module.exports = resolvers
