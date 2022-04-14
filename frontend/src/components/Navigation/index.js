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
            <>
            <ProfileButton user={sessionUser} />
            <NavLink exact to="/">Home</NavLink>
            <NavLink to='/cocktails'>Cocktails</NavLink>
            <NavLink to='/cocktails/new'>Add Cocktail</NavLink>
            </>
        );
    } 
    // else {
    //     sessionLinks = (
    //         <>
    //             <NavLink to="/login">Log In</NavLink>
    //             <NavLink to="/signup"><button>Sign Up</button></
    //             NavLink>
    //             <DemoUser />
    //         </>
    //     );
    // }

    return (
        <>
            <div className="nav-bar-container">
                <div className="nav-bar-right">
                    {isLoaded && sessionLinks}
                </div>
            </div>
        </>
    );
}

export default Navigation;