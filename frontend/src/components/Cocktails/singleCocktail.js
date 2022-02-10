import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import { getCocktail, removeCocktail, } from "../../store/cocktails";
import EditCocktailForm from './editCocktail'


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

    if(cocktail.userId === user.id){
        return (
            <div className="single-cocktail">
            <div
                className="single-cocktail-image"
                style={{ backgroundImage: `url('${cocktail?.imgUrl}')` }}
                ></div>
            <h2>{cocktail?.name}</h2>
            <p>{cocktail?.liquorType}</p>
            <p>{cocktail?.ingredients}</p>
            <p>{cocktail?.directions}</p>
            <button type='button' onClick={() => handleDelete(cocktail.id)}>Delete</button>
            <button type='button' onClick={editForm}>Edit</button>
            {closeForm && (<EditCocktailForm openForm={openForm}/>)}
        </div>
    )
}else{
    return(
        <div className="single-cocktail">
        <div
            className="single-cocktail-image"
            style={{ backgroundImage: `url('${cocktail?.imgUrl}')` }}
            ></div>
        <h2>{cocktail?.name}</h2>
        <p>{cocktail?.liquorType}</p>
        <p>{cocktail?.ingredients}</p>
        <p>{cocktail?.directions}</p>
        </div>
    )
}
}

export default SingleCocktail