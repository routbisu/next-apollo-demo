import { getUsers } from './getUsers'

describe('fetch users successfully', () => {
  test('check if we have any users', async () => {
    const { data: users } = await getUsers({ pageNumber: 1 })
    expect(users?.users?.length > 0).toBeTruthy()
  })

  test('check pageSize', async () => {
    const { data: users } = await getUsers({ pageNumber: 1, pageSize: 4 })
    expect(users?.users?.length).toEqual(4)
  })
})
