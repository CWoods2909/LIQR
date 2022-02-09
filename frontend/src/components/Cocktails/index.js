import React, { useEffect } from 'react';
// import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import { getCocktails } from '../../store/cocktails';
import './allcocktails.css'

const AllCocktails = () => {
    const dispatch = useDispatch();
    const cocktails = useSelector((state) => Object.values(state.cocktail.cocktails))
    

    useEffect(() => {
        dispatch(getCocktails())
    }, [dispatch]);

    return (
        <>
            <h1>Cocktails</h1>
            <div className="drinkContainer">
                {cocktails?.map(({ id, name,liquorType }) => (
                    <div className="drinkList">
                        <NavLink key={id} to={`/cocktails/${id}`}>{name}</NavLink>
                        <p>{liquorType}</p>
                    </div>
                ))
                }
            </div>
        </>
    )
}
export default AllCocktails