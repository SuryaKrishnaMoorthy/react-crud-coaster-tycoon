import React, { Component } from 'react'

class NewParkForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      city: '',
      state: ''
    }
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render () {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="name">
            Park Name
          </label>
          <input onChange={ this.onChange } value={ this.state.name } type="text" className="form-control" name="name" id="name" />
          <label htmlFor="city">
            Park City
          </label>
          <input onChange={ this.onChange } value={ this.state.city } type="text" className="form-control" name="city" id="city" />
          <label htmlFor="state">
            Park State
          </label>
          <input onChange={ this.onChange } value={ this.state.state } type="text" className="form-control" name="state" id="state" />

          <button type="submit" className="btn btn-primary mt-4">Create New Park</button>
        </div>
      </form>
    )
  }
}

export default NewParkForm
