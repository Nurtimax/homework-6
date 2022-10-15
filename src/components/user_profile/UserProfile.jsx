import React from 'react'
import './UserProfile.css'

const UserProfile = ({profilePic, username}) => {
  return (
    <figure>
        <img src={profilePic} alt={username} />
    </figure>
  )
}

export default UserProfile