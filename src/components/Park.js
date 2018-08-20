import React from 'react'
import ParkModel from '../models/Park.js'
import ParkEdit from './ParkEdit.js'

class Park extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      park: { rides: [] },
    }
  }

  componentDidMount = async () => {
    const park = await ParkModel.find(this.props.parkId);
    this.setState({
      park
    })
  }

  destroyPark = async () => {
    const park = await ParkModel.destroy(this.props.parkId);
    const parks = await this.props.resetParks()
    this.setState({
      park: { rides: [] }
    })
  }

  render () {
    const { park } = this.state
    const lis = park.rides.map(ride => {
      return <li key={ ride.id }>{ ride.name } ({ ride.capacity } Capacity)</li>
    })
    const buttons = (
      <div>
        <a onClick={ this.props.toggeleEdit } className="btn btn-light d-block text-dark">Edit { park.name } Record</a>
        <a onClick={ this.destroyPark } className="btn btn-danger text-white d-block mt-2">Delete { park.name }</a>
      </div>
    )

    if (!park.name) return (<div className="alert alert-secondary">Select a Park</div>)

    return (
      <div className="card">
        <div className="card-header">
          { park.name }
        </div>
        <div className="card-body">
          <h5 className="card-title">{ park.city }, { park.state }</h5>
          <hr/>
          <h6>Rides:</h6>
          <ul>
            { lis }
          </ul>
          { buttons }
        </div>
      </div>
    )
  }

  // componentWillRecieveProps = (newState) =>{
  //   console.log(newState);
  // }

  // getRides = async (id) => {
  //   const park = await ParkModel.find(id);
  //   console.log(ride);
  //   this.setState({
  //     park
  //   })
  // }

}

export default Park
