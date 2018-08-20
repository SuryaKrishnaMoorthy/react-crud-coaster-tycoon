import React, { Component } from 'react'
import ParkModel from '../models/Park'

class ParkForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: '',
      name: '',
      city: '',
      state: '',
      errors: []
    }
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = async (event) => {
    event.preventDefault()
    const {name, city, state} = this.state;
    const park = await ParkModel.create({name, city, state});
    
    if(park.errors) {
    return this.setState({
        errors: park.errors
      })
    }

    this.props.resetParks()

    this.setState({
      name: '',
      city: '',
      state: '',
    })
  }

  render () {
    const errors = this.state.errors.map((error, index) => {
      return <p key={ index } className="m-1">{ error }</p>
    })

    return (
      <form onSubmit={ this.onSubmit }>
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

          <button type="submit" className="btn btn-primary mt-4">Submit</button>
        </div>
        { !!errors.length && <div className="alert alert-danger">{ errors }</div> }
      </form>
    )
  }
}

export default ParkForm
