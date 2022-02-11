// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addCocktailToList } from '../../store/drinkList';

const AddToList = ({ cocktail }) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const singleCocktail = useSelector(state => state.cocktail.cocktails[id])

    const handleSubmit = async (e) => {
        e.preventDefault()

        let added = await dispatch(addCocktailToList(singleCocktail))
        if (added) {
            window.alert('Success!!!!!!!!!!!')
        }
    }

    return (
        <div className="addDrinkButton">
            <button type='submit' onClick={handleSubmit}>Add Drink</button>
        </div>
    )
}

export default AddToList