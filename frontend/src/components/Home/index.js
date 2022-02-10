import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { NavLink,Redirect } from 'react-router-dom';
import barImage from '../../images/bar-image.jpg'

return (
    <div className='splash-header'>
        <h1>Welcome to Liqr</h1>
        <h3>The Worlds premier site for cocktail recipe's</h3>
        <div className='image-container'>
            <div className="image" style={{ backgroundImage: `url(${barImage})` }} />
        </div>
    </div>
)
