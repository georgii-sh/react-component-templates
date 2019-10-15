// @flow

import React from 'react'
import { shallow } from 'enzyme'
import { Unwrapped<%= upCaseName %> as <%= upCaseName %> } from './<%= upCaseName %>'

const mockedData = {

}

describe('<%= upCaseName %>', () => {
  const component = shallow(<<%= upCaseName %> {...mockedData} />)

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })
})
