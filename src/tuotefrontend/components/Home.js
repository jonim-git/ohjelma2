import React from 'react'
import Message from './Message'

function Home() {
  return (
    <div>
        <h1>Kotisivu tässä</h1>
        <Message tyyli='normal' >
            <h3> Eka toteutus</h3>
            <p>Tässä on tekstiä</p>
        </Message>
        <Message tyyli='abnormal'>
            <h5>Toinen kutsu</h5>
        </Message>
        <Message tyyli='active'>
            <h5>Kolmas kutsu</h5>
        </Message>
    </div>
  )
}

export default Home