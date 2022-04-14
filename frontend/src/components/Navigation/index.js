import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import DemoUser from './demoUser';
import { AiOutlineHome } from 'react-icons/ai';
import {BiDrink} from 'react-icons/bi'
import {CgAddR} from 'react-icons/cg'

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
            <ProfileButton user={sessionUser} />
            <NavLink exact to="/"><AiOutlineHome className='home-icon'/></NavLink>
            <NavLink to='/cocktails'><BiDrink className='cocktail-icon'/></NavLink>
            <NavLink to='/cocktails/new'><CgAddR className='add-cocktail-icon'/></NavLink>
            </>
        );
    } 
    
    return (
        <>
            <div className="nav-bar-container">
                    {isLoaded && sessionLinks}
            </div>
        </>
    );
}

export default Navigation;