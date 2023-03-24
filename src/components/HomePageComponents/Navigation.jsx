import React from 'react'
import './Navigation.css'
import { Link  } from 'react-router-dom'

const NavigationComponent = () => {
  return (



    <nav className='navbar navbar-expand-lg navbar-dark bg-warning  '>
   <Link className='navbar-brand  info' to='#'>VIT Test Papers </Link>

<ul className='navbar-nav'>
<li className='nav-item'>
    <Link className='nav-link btn btn-primary specs'  to="/login">
        Login
    </Link>
</li>

<li className='nav-item'>
    <Link className='nav-link btn btn-success' to="/register">

        Register
    </Link>
</li>

</ul>

    </nav>
  )
}

export default NavigationComponent