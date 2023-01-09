import React, { useEffect, useState } from 'react'
import { getUsers } from '../graphql/getUsers'
import { User } from '../types/User'

import Card from '../components/Card/Card'
import Grid from '../components/layout/Grid'
import PageContainer from '../components/layout/PageContainer'
import PageHeading from '../components/layout/Heading'
import Loader from '../components/layout/Loader'
import { useInfiniteScrolling } from '../hooks/useInfiniteScrolling'

const Page: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [isFetching, setIsFetching] = useInfiniteScrolling(loadMoreHandler)

  const fetchUsers = async (pageNumber: number) => {
    const { data } = await getUsers({ pageNumber })

    // Append to the list of users
    setUsers([...users, ...data.users])
  }

  function loadMoreHandler() {
    setPageNumber((curr) => {
      fetchUsers(curr + 1)
      return curr + 1
    })

    setIsFetching(false)
  }

  useEffect(() => {
    fetchUsers(pageNumber)
  }, [])

  return (
    <PageContainer>
      <PageHeading data-testid="heading">Registered Users</PageHeading>
      <Grid>
        {users && users.length > 0 ? (
          users.map(({ id, ...rest }) => <Card key={id} {...rest} />)
        ) : (
          <Loader />
        )}
        {isFetching && <Loader />}
      </Grid>
    </PageContainer>
  )
}

export default Page
