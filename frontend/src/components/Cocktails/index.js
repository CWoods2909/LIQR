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

    const handleBrokenImg = (event) => {
        event.target.src = "https://www.dailyactor.com/wp-content/uploads/2013/05/the-great-gatsby-leonardo-dicaprio.jpg"
    }


    return (
        <>
            <h1 className='cocktails-header'>Cocktails</h1>
            <div className="drinkContainer">
                {cocktails?.map(({ id, name,liquorType, imgUrl }) => (
                    <div className="drinkList">
                        <img src={imgUrl} className='cocktail-image' onError={handleBrokenImg}/>
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