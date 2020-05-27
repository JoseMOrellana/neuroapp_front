import React from 'react'
import { withRouter } from 'react-router-dom'

import NavigationItems from '../NavigationItems/NavigationItems'

const navbar = (props) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarsExample10"
      aria-controls="navbarsExample10"
      aria-expanded="false"
      aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
    </button>

    <div
      className="collapse navbar-collapse justify-content-md-center"
      id="navbarsExample10">
        <NavigationItems />
    </div>
  </nav>
)

export default withRouter(navbar)