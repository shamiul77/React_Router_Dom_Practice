import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <nav >
          <button>
            <Link to="/">Home</Link>
          </button>
          <button>
            <Link to="blogs">Blogs</Link>
          </button>
          <button>
            <Link to="contact">Contact</Link>
          </button>

      </nav>
      <Outlet/>
    </div>
  )
}

export default Layout
