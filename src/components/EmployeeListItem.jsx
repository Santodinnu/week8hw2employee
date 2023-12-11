import React from 'react'
import { Link } from 'react-router-dom'

const EmployeeListItem = ({data}) => {
    const {first_name , id} = data
  return (
    <div>
        <Link key={id} to={"/employee/" + first_name}>  
      <h3>
        {data.first_name} {data.last_name}
      </h3>
    </Link>
    <ul>
      <li>
        <h3>
          {data.first_name} {data.last_name}{" "}
        </h3>
        <h4>{data.email}</h4>
        <img src={data.avatar} alt="picture" />
      </li>
    </ul>
    
  </div>
  )
}

export default EmployeeListItem

