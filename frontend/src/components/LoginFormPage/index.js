import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import DemoUser from '../Navigation/demoUser';
import './LoginForm.css';

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to='/' />
    )


    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors([])

        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors)

            })
    }



    return (
        <div className='login-form'>
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) =>
                        <li key={error}>{error}</li>
                    )}
                </ul>
                <div className='row'>
                    <label>
                        <input
                            type='text'
                            value={credential}
                            onChange={(e) => setCredential(e.target.value)}
                            placeholder='Username/Email'
                        />
                    </label>
                </div>
                <div className='row'>
                    <label>
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password'
                        />
                    </label>
                </div>
                <button type='submit'>Log In</button> 
                <NavLink to="/signup"><button>Sign Up</button></NavLink>
                <DemoUser />
            </form>
        </div >
    )

}

export default LoginFormPage