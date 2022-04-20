import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { getDrinkList } from '../../store/drinkList';
import { getCocktails } from '../../store/cocktails';
import DeleteSingleCocktail from './deleteDrink'
import './drinkList.css'

const DrinkList = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const drinks = useSelector((state) => Object.values(state.drinkList.cocktails))
    const history = useHistory()

    useEffect(() => {
        dispatch(getDrinkList(user?.id))
        dispatch(getCocktails())

    }, [dispatch])

    useEffect(() => {
        if (!user) {
            history.push('/login')
        }
    }, [user, history])


    return (
        <>
            {/* <div className='welcome-container'> */}
                {/* <div className="welcome"> */}
                    {/* <p className='words'> */}
                        {/* Welcome to LIQR.  The worlds leading authority on all things cocktail's.  */}
                    {/* </p> */}
                {/* </div> */}
            {/* </div> */}
            <div className="main-list-outer">
                {/* <img src="../../../img/martini-vintage.jpg" className='martini'/> */}
                <div className="drinkList-container">
                    <div className='drinkList-header'>
                        <h2>Favorite Cocktails</h2>
                    </div>
                    {!drinks.length ? <h3 className='empty-list'>Add some drinks</h3> :
                    drinks?.map((drinks) => (
                        <>
                        <NavLink key={drinks.id} className='drinkList-values' to={`/cocktails/${drinks.id}`}>{drinks.name}</NavLink>
                        <DeleteSingleCocktail id={drinks.id} />
                        </>
                        ))
                    }
                </div>
                {/* <img src='../../../img/aperol-vintage.jpg' className='aperol'/> */}
            </div>
        </>
    )
}




export default DrinkList