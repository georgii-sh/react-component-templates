// @flow

import React from 'react'

import styles from './<%= name %>.scss'

type Props = {

}

class <%= name %> extends React.PureComponent<Props> {
  render() {
    return (
      <div className={styles.<%= name %>}>
        Hi from <%= name %> !
      </div>
    )
  }
}

export default <%= name %>
