import React from 'react'

const Card = (props) => {
  return (
    <div>
        <h1>Title: {props.title}</h1>
        <input type="text" onChange={(e) => {
            props.changeName(e.target.value)
        }} />
        {/* {console.log(props.compName)} */}
        <p>Name State Variable Current Value: {props.compName}</p>
    </div>
  )
}

export default Card