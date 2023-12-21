import React from 'react'
import {Link} from 'react-router-dom'

const about = () => {
  return (
    <div>
        <Link to='/home' className="btn btn-secondary">Home</Link>

      <p>About us</p>
    </div>
  )
}

export default about
