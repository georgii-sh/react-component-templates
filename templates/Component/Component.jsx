// @flow

import React from 'react'

import styles from './<%= upCaseName %>.scss'

type Props = {

}

class <%= upCaseName %> extends React.PureComponent<Props> {
  render() {
    return (
      <div className={styles.<%= lowCaseName %>}>
        Hi from <%= upCaseName %> !
      </div>
    )
  }
}

export default <%= upCaseName %>
