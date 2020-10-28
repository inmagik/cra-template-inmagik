import React from 'react'
import { useAuthUser, useAuthActions } from 'use-eazy-auth'

export default function Layout({ children }) {
  const { user } = useAuthUser()
  const { logout } = useAuthActions()

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <span className="nav-link">INMAGIK</span>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <span className="nav-link">hello @{user.username}</span>
          </li>
          <li className="nav-item active">
            <span
              onClick={() => {
                logout()
              }}
              className="nav-link pointer"
            >
              Logout
            </span>
          </li>
        </ul>
      </nav>
      {children}
    </>
  )
}
