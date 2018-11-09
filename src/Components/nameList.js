import React from 'react'

const FormList = ({ propNames }) => {

  const newNames = propNames.map( name => {
    return (
      <div className="collection">
        <li className="collection-item">{name.firstName} { name.lastName} </li>
      </div>
    )
  })

  return(
    <div>
      <ul>
        { newNames }
      </ul>
    </div>
  )
}

export default FormList