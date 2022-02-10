import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import DemoUser from './demoUser';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />

        );
    } else {
        sessionLinks = (
            <>
                <NavLink to="/login">Log In</NavLink>
                <NavLink to="/signup">Sign Up</
                NavLink>
                <DemoUser />
            </>
        );
    }

    return (
        <>
            <div className="nav-bar-container">
                <NavLink exact to="/">Home</NavLink>
                <h2 className='nav-bar-header'>LIQR</h2>
                <div className="nav-bar-right">
                    {isLoaded && sessionLinks}
                    <NavLink to='/cocktails'>Cocktails</NavLink>
                    <NavLink to='/cocktails/new'>Add Cocktail</NavLink>
                </div>
            </div>
            
        </>
    );
}

export default Navigation;