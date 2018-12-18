// @flow

import React from 'react'
import { shallow } from 'enzyme'
import <%= name %> from './<%= name %>'

const mockedData = {

}

describe('<%= name %>', () => {
  const component = shallow(<<%= name %> {...mockedData} />)

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })
})
