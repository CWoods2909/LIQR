import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
// import DemoUser from './demoUser';
import { AiOutlineHome } from 'react-icons/ai';
import { BiDrink } from 'react-icons/bi'
import { CgAddR } from 'react-icons/cg'
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                <div className='browse-icons'>
                    <ProfileButton user={sessionUser} />
                    <NavLink exact to="/"><AiOutlineHome className='home-icon' /></NavLink>
                    <NavLink to='/cocktails'><BiDrink className='cocktail-icon' /></NavLink>
                    <NavLink to='/cocktails/new'><CgAddR className='add-cocktail-icon' /></NavLink>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="nav-bar-container">
                {isLoaded && sessionLinks}
                <div className='socials-navbar'>
                    <a href='https://github.com/CWoods2909' target='_blank' rel='noreferrer'><FaGithub className='github2' /></a>
                    <a href='https://www.linkedin.com/in/charles-woods-319a83231?trk=people-guest_people_search-card' target='_blank' rel='noreferrer'><FaLinkedin className='linked2' /></a>
                </div>
            </div>
        </>
    );
}

export default Navigation;