import React from 'react'
import './userCard.css';

const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
        <h1>User Card</h1>
        <img id='user-image' src={props.image} alt='User' />
        <h2 id='user-name'>{props.name}</h2>
        <p id='user-email'>{props.email}</p>
        <p id='user-description'>{props.description}</p>
        {/* <p id='user-description'>{props.description} {console.log("Dueben Presley Lewis")}</p> */}
    </div>
    
)
}

export default UserCard

