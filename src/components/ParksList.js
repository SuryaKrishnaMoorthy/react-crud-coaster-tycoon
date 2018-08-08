import React from 'react'

const ParksList = ({ parks, selected, selectPark }) => {
  const lis = parks.map(park => {
    const classes = `list-group-item ${ park.id === selected && 'active' }`
    return (
      <li onClick={ () => selectPark(park.id) } className={ classes } key={ park.id }>{ park.name }</li>
    )
  })

  return (
    <ul className="list-group">{ lis }</ul>
  )
}

export default ParksList
