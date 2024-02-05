import React from 'react'

export default function ArrayPassing(props) {
    // const{items}=props;
  return (
    <div>
        <ul>
            {props.items.map((val)=>(
                <li key={val.id}>{val.name}</li>
                ))}
        </ul>
    </div>
  )
}
