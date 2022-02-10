import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
// import barImage from '../../images/bar-image.jpg'
// import longIsland from '../../images/long-island.jpg'
// import marg from '../../images/margarita.jpg'
// import mojito from '../../images/mojito.jpg'

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
                <NavLink to="/signup">Sign Up</NavLink>
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
            {/* <div className='image-container'>
            <div className="image" style={{ backgroundImage: `url(${barImage})` }} />
            </div> */}
            {/* <div className='image-container'>
                <div className='image' style={{ backgroundImage: `url(${longIsland})` }} />


                <div className='image' style={{ backgroundImage: `url(${marg})` }} />


                <div className='image' style={{ backgroundImage: `url(${mojito})` }} />

            </div> */}
        </>
    );
}

export default Navigation;