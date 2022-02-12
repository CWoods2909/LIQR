// import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { deleteFromDrinkList} from "../../store/drinkList";
import { getDrinkList } from '../../store/drinkList';

const DeleteSingleCocktail = ({id}) => {
    const dispatch = useDispatch();
    const cocktail = useSelector(state => state.cocktail.cocktails[id])
    const user = useSelector((state) => state.session.user);

    const handleDelete = async (id) => {
        await dispatch(deleteFromDrinkList(id))
        .then(() => dispatch(getDrinkList(user.id)))
    }
    return(
        <button type='button' onClick={() => handleDelete(cocktail.id)}>Remove</button>
    )
}

export default DeleteSingleCocktail;