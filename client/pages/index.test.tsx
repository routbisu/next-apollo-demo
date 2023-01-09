/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import HomePage from '@pages/index'

describe('HomePage', () => {
  it('should render the heading', async () => {
    const wrapper = shallow(<HomePage />)

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find({ 'data-testid': 'heading' }).text()).toEqual(
      'Registered Users'
    )
  })
})
