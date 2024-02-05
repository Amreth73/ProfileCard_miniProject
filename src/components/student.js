import React from 'react'

export default function Students(props) {
  return (
    <div className='student'>
        <table>
            <tbody>
            <tr>
                <th>Name</th>
                <td>{props.name}</td>
            </tr>
            <tr>
                <th>Age</th>
                <td>{props.age}</td>
            </tr>
            <tr>
                <th>IsMarried</th>
                <td>{props.IsMarried ? "YES": "NO"}</td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}
Students.defaultProps=
{
    name:"No Name",
    age:0,
}