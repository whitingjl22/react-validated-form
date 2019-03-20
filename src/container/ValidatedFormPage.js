import React, { Component } from "react"

class ValidatedFormPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      emailValid: false,
      nameValid: false,
      submit: false
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value }, () => {
      if (this.state.name.length < 8) {
        this.setState({ nameValid: false })
      } else {
        this.setState({ nameValid: true })
      }
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
        this.setState({ emailValid: true })
      } else {
        this.setState({ emailValid: false })
      }
    })
  }

  onSubmit = () => {
    if (this.state.nameValid && this.state.emailValid) {
      this.setState({ submit: true })
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Validated Form</h1>
        {this.state.submit ? (
          <h1>Thanks</h1>
        ) : (
          <form className="form" onSubmit={this.onSubmit}>
            <input id="name" type="text" placeholder="name" onChange={this.handleChange} />
            {this.state.nameValid === false && this.state.name !== "" ? <span>Name is not valid</span> : null}
            <br />
            <input id="email" type="email" placeholder="email" onChange={this.handleChange} />
            {this.state.emailValid === false && this.state.email !== "" ? <span>Email is not valid</span> : null}
            <br />
            <input type="submit" disabled={!this.state.emailValid || !this.state.nameValid} />
          </form>
        )}
      </div>
    )
  }
}

export default ValidatedFormPage
