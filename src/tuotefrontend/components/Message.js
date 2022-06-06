import React from 'react'
import styles from '../styles/oma.css'

function Message(props) {
  return (
    <div className={'message-'+props.tyyli}>
        {props.children}
        <hr />
        <p>Minun message</p>
    </div>
  )
}

export default Message