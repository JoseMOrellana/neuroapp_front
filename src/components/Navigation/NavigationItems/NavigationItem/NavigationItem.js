import React from 'react';
import { Link } from 'react-router-dom'


const navigationItem = (props) => (
    <li className="nav-item">
        <Link className="nav-link"
            to={props.link}
            exact={props.exact}>
            {props.children}
        </Link>
    </li>
)

export default navigationItem