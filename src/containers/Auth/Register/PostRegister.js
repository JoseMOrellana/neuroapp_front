import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const PostRegister = (props) => (
    <div>
        <h1>Usuario registrado satisfactoriamente</h1>
        <Link to={"/login"}>Iniciar sesión</Link>
    </div>
)

export default PostRegister