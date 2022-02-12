import { useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { getDrinkList } from '../../store/drinkList';
import { getCocktails } from '../../store/cocktails';
import DeleteSingleCocktail from './deleteDrink'

const DrinkList = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const drinks = useSelector((state) => Object.values(state.drinkList.cocktails))
    const history = useHistory()

    useEffect(() =>{
        dispatch(getDrinkList(user?.id))
        dispatch(getCocktails())

    },[dispatch])

    useEffect(() =>{
        if(!user){
            history.push('/login')
        }
    },[user, history])
    
    
        return(
            
            <div className="main-list-outer">
        <h1>Drink List</h1>
        <div className="drinkList-container">
            {drinks?.map((drinks)=>(
                <>
                <NavLink key={drinks.id} className='drinkList-values' to={`/cocktails/${drinks.id}`}>{drinks.name}</NavLink>
                <DeleteSingleCocktail id={drinks.id}/>
                </>
                ))}
        </div>
        </div>
    )
}




export default DrinkList