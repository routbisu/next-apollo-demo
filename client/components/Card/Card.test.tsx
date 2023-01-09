/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import Card from './Card'
import { User } from 'types/User'

describe('card component', () => {
  it('should render the card correctly', async () => {
    const props: User = {
      name: 'James Bond',
      phone: '1234567890',
      email: 'james.bond@gmail.com',
      address: '30 Wellington Square, Chelsea'
    }

    const wrapper = shallow(<Card {...props} />)

    // Snapshot test
    expect(wrapper).toMatchSnapshot()

    // Check name
    expect(wrapper.find({ 'data-testid': 'name' }).text()).toEqual('James Bond')
    // Check phone
    expect(wrapper.find({ 'data-testid': 'phone' }).text()).toEqual(
      '1234567890'
    )
    // Check email
    expect(wrapper.find({ 'data-testid': 'email' }).text()).toEqual(
      'james.bond@gmail.com'
    )
    // Check address
    expect(wrapper.find({ 'data-testid': 'address' }).text()).toEqual(
      '30 Wellington Square, Chelsea'
    )
  })
})
