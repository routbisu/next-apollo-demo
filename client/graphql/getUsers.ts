import { gql } from '@apollo/client'
import client from '../lib/apollo-client'
import { PageParams } from '../types/PageParams'

export const getUsers = async ({ pageNumber, pageSize = 20 }: PageParams) => {
  return await client.query({
    query: gql`
    query {
      users(pageNumber: ${pageNumber}, pageSize: ${pageSize}) {
        id
        name
        email
        address
        phone
      }
    }
    `
  })
}
