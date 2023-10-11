import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark py-2'>
            <div className='container-fluid'>
                <Link to='/' className='navbar-brand ml-5'>Contact List App</Link>
                <Link to='/add' className='btn border-white text-white mx-5'>Add Contact</Link>
            </div>
        </nav >
    )
}

export default Navbar