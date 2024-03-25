import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div  >
        <nav className="navbar bg-primary px-5 py-3 ">
            <div class="container-fluid d-flex">
                <a class="navbar-brand fs-2"><Link to="/" class="text-decoration-none text-white fw-bold">Home</Link></a>
                <a class="navbar-brand fs-2"><Link to="blogs" class="text-decoration-none text-white fw-bold">Blogs</Link></a>
                <a class="navbar-brand fs-2"><Link to="contact" class="text-decoration-none text-white fw-bold">Contact</Link></a>
            </div>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Layout
