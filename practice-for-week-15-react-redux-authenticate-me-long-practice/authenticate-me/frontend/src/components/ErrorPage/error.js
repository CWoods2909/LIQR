import React from 'react';
import hangover from '../../images/hangover.gif'
import './error.css'

function ErrorPage () {

    return(
        <div className='error-page-container'>
            <h1>Sorry, looks like someone had a bad time.</h1>
        <div className='gif' 
        style={{backgroundImage: `url('${hangover}')`}}
        ></div>
        </div>
        )
    }

    export default ErrorPage