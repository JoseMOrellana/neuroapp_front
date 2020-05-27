import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className="navbar-nav">
        <NavigationItem link={"/"}>Home</NavigationItem>
        <NavigationItem link={"/login"}>Login</NavigationItem>
        <NavigationItem link={"/register"}>Register</NavigationItem>
        <NavigationItem link={"/history"}>History</NavigationItem>
        <NavigationItem link={"/profile"}>Profile</NavigationItem>
        <NavigationItem link={"/pacientform"}>Pacient Form</NavigationItem>
        <NavigationItem link={"/logout"}>Logout</NavigationItem>
    </ul>
)

export default navigationItems