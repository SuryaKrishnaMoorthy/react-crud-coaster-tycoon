import React from 'react'

const Park = ({ park }) => {
  const lis = park.rides.map(ride => {
    return <li key={ ride.id }>{ ride.name } ({ ride.capacity } Capacity)</li>
  })

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
        <a className="btn btn-light d-block text-dark">Edit { park.name } Record</a>
        <a className="btn btn-danger text-white d-block mt-2">Delete { park.name }</a>
      </div>
    </div>
  )
}

export default Park
