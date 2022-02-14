import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { getDrinkList } from '../../store/drinkList';
import { getCocktails } from '../../store/cocktails';
import DeleteSingleCocktail from './deleteDrink'
import './drinkList.css'
import barImage from  '../../images/bar-image.jpg'

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
            <div className="main-list-outer">

                <div className="drinkList-container">
                    <div className='drinkList-header'>
                        <h2>Favorite Cocktails</h2>
                    </div>
                    {drinks?.map((drinks) => (
                        <>
                            <NavLink key={drinks.id} className='drinkList-values' to={`/cocktails/${drinks.id}`}>{drinks.name}</NavLink>
                            <DeleteSingleCocktail id={drinks.id} />
                        </>
                    ))}
                </div>
                <div className="welcome">
                    <p className='words'>
                        Welcome to LIQR.  The worlds leading authority on all things liquor.  Please browse the website and make a drink, add one to your favorites list or just look through the many user created cocktails.  Enjoy!
                    </p>
                </div>
            </div>
            <div className="bar-image-container">
            <div className="bar-picture" 
            style={{backgroundImage: `url('${barImage}')`}}
            ></div>
            </div>
        </>
    )
}




export default DrinkList