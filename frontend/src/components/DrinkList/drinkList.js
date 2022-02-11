import { useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { getDrinkList } from '../../store/drinkList';
import { getCocktails } from '../../store/cocktails';

const DrinkList = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const drinks = useSelector((state) => Object.values(state.drinkList.cocktails))
    const history = useHistory()

    useEffect(() =>{
        dispatch(getDrinkList(user.id))
        dispatch(getCocktails())
    },[dispatch])

    if(user){
        return(
            <div className="main-list-outer">
        <h1>Drink List</h1>
        <div className="drinkList-container">
            {drinks?.map(({Cocktail, id, cocktailId})=>(
                
                <NavLink key={id} className='drinkList-values' to={`/cocktails/${cocktailId}`}>{Cocktail.name}</NavLink>
                ))}
        </div>
        </div>
    )
}else{
    return history.push('/login')
}
}


export default DrinkList