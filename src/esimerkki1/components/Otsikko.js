import React from "react"

export class Otsikko extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          laskuri : 0
      }
    }
    buttonClicked() {
        this.setState( (prevState) => ({laskuri : prevState.laskuri + 1}))
    }
    render() {
      return (
        <div>
          <h1>{this.props.title} on {this.state.laskuri}</h1>
          <button onClick={()=> this.buttonClicked()}>Paina</button>
        </div>
      )
    }
  }