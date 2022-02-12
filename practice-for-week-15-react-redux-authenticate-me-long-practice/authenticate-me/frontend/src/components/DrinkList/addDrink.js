// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addCocktailToList } from '../../store/drinkList';

const AddToList = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const user = useSelector((state) => state.session.user)

    const handleSubmit = async (e) => {
        e.preventDefault()

        let added = await dispatch(addCocktailToList({cocktailId:id, userId:user.id}))
        if (added) {
            window.alert('Cheers.  Your drink was saved for later.')
        }
    }

    return (
        <div className="addDrinkButton">
            <button type='submit' onClick={handleSubmit}>Add Drink</button>
        </div>
    )
}

export default AddToList