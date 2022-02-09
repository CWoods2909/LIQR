import { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { getCocktail, removeCocktail, } from "../../store/cocktails";



const SingleCocktail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const cocktail = useSelector(state => state.cocktail.cocktails[id])
    
    useEffect(() => {
        dispatch(getCocktail(id))
    }, [dispatch])

    
    
    const handleDelete = (id) =>{
        if(window.confirm("Are you sure you want to delete this cocktail?"))
        dispatch(removeCocktail(id))
        
    }
    
    return (
        <div className="single-cocktail">
            <h2>{cocktail?.name}</h2>
            <p>{cocktail?.liquorType}</p>
            <p>{cocktail?.ingredients}</p>
            <p>{cocktail?.directions}</p>
            <p>{cocktail?.imgUrl}</p>
            <button type='button' onClick={() => handleDelete(cocktail.id)}>Delete</button>
            <a href={`/cocktails/${id}/edit`}>Edit</a>
        </div>
    )
}

export default SingleCocktail