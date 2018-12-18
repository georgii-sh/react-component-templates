// @flow

import React from 'react'
import { connect } from 'react-redux'

import styles from './<%= name %>.scss'

type Props = {

}

class <%= name %> extends React.PureComponent<Props> {
  render() {
    return (
      <div className={styles.<%= name %>}>
        Hi from <%= name %> !
      </div >
    )
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  reduxFunction() {
    dispatch(reduxFunction())
  }
})

const mapStateToProps = state => ({

})

export const Unwrapped<%= name %> = <%= name %>

export default connect(mapStateToProps, mapDispatchToProps)(<%= name %>)
