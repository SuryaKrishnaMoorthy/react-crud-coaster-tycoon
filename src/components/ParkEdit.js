import React, {Component} from 'react'
import Park from './Park.js'
import ParkModel from '../models/Park.js'

class ParkEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      name: '',
      city: '',
      state: '',
      errors: []
    }
  }

  componentDidMount = async () => {
    const park = await ParkModel.find(this.props.parkId)
    const {id, name, city, state} = park

    this.setState({id, name, city, state})
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = async (event) => {
    event.preventDefault();
    const {id, name, city, state} = this.state;
    const response = await ParkModel.update(id, {name, city, state});

    if (response.errors) {
      this.setState({
        errors: response.errors
      })
    } else {
      this.props.resetParks();
      this.props.toggeleEdit();
    }
  }

  render() {
    const errors = this.state.errors.map((error, index) => {
      return <p key={index} className="m-1">{error}</p>
    })
    return (<form onSubmit={this.onSubmit}>
      <div className="form-group">
        <label htmlFor="name">
          Park Name
        </label>
        <input onChange={this.onChange} defaultValue={this.state.name} type="text" className="form-control" name="name" id="name"/>
        <label htmlFor="city">
          Park City
        </label>
        <input onChange={this.onChange} defaultValue={this.state.city} type="text" className="form-control" name="city" id="city"/>
        <label htmlFor="state">
          Park State
        </label>
        <input onChange={this.onChange} defaultValue={this.state.state} type="text" className="form-control" name="state" id="state"/>

        <button type="submit" className="btn btn-primary mt-4">Update</button>
        <button type="submit" className="btn btn-primary ml-5 mt-4">Cancel</button>
      </div>
      {!!errors.length && <div className="alert alert-danger">{errors}</div>}
    </form>)
  }
}

export default ParkEdit
