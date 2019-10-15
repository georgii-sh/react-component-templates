// @flow

import React from 'react'
import { connect } from 'react-redux'

import styles from './<%= upCaseName %>.scss'

type Props = {

}

class <%= upCaseName %> extends React.PureComponent<Props> {
  render() {
    return (
      <div className={styles.<%= lowCaseName %>}>
        Hi from <%= upCaseName %> !
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

export const Unwrapped<%= upCaseName %> = <%= upCaseName %>

export default connect(mapStateToProps, mapDispatchToProps)(<%= upCaseName %>)
