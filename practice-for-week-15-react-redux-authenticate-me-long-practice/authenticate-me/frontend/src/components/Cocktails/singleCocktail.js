import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import { getCocktail, removeCocktail, } from "../../store/cocktails";
import EditCocktailForm from './editCocktail'
import AddToList from '../DrinkList/addDrink'

const SingleCocktail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const cocktail = useSelector(state => state.cocktail.cocktails[id])
    const user = useSelector(state => state.session.user)

    const history = useHistory()

    useEffect(() => {
        dispatch(getCocktail(id))
    }, [dispatch])

    const editForm = (e) => {
        openForm(true);
    }

    const [closeForm, openForm] = useState(false);


    const handleDelete = async (id) => {
        await dispatch(removeCocktail(id))
        history.push('/cocktails')
    }

    if (user.id === cocktail.userId) {
        return (
            <div className="single-cocktail">
                <div
                    className="single-cocktail-image"
                    style={{ backgroundImage: `url('${cocktail?.imgUrl}')` }}
                ></div>
                <h2>{cocktail?.name}</h2>
                <ul className="cocktail-details">
                <li>Liquor Type: {cocktail?.liquorType}</li>
                <li>Ingredients: {cocktail?.ingredients}</li>
                <li>How To Make: {cocktail?.directions}</li>
                </ul>
                <button type='button' onClick={() => handleDelete(cocktail.id)}>Delete</button>
                <button type='button' onClick={editForm}>Edit</button>
                {closeForm && (<EditCocktailForm openForm={openForm} />)}
                <AddToList />
            </div>
        )
    } else {
        return (
            <div className="single-cocktail">
                <div
                    className="single-cocktail-image"
                    style={{ backgroundImage: `url('${cocktail?.imgUrl}')` }}
                ></div>
                    <h2>{cocktail?.name}</h2>
                    <ul className="cocktail-details">
                    <li>Liquor Type: {cocktail?.liquorType}</li>
                    <li>Ingredients: {cocktail?.ingredients}</li>
                    <li>How to make: {cocktail?.directions}</li>
                    </ul>
                    <AddToList />
            </div>
        )
    }
}

export default SingleCocktail