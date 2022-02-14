import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink,Redirect } from 'react-router-dom';
import { getCocktails } from '../../store/cocktails';
import './allcocktails.css'

const AllCocktails = () => {
    const dispatch = useDispatch();
    const cocktails = useSelector((state) => Object.values(state.cocktail.cocktails))
    const sessionUser = useSelector((state) => state.session.user)
    
    useEffect(() => {
        dispatch(getCocktails())
    }, [dispatch]);

    if (!sessionUser) return (
        <Redirect to='/' />
    )



    return (
        <>
            <h1 className='cocktails-header'>Cocktails</h1>
            <div className="drinkContainer">
                {cocktails?.map(({ id, name,liquorType }) => (
                    <div className="drinkList">
                        <NavLink key={id} className='drinks' to={`/cocktails/${id}`}>{name}</NavLink>
                        <p className='liquor-type'>{liquorType}</p>
                    </div>
                ))
                }
            </div>
        </>
    )
}
export default AllCocktails