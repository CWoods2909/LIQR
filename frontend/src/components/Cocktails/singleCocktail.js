import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { getCocktail } from "../../store/cocktails";

const SingleCocktail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const cocktail = useSelector(state => state.cocktail.cocktails[id])
    
    useEffect(() => {
        dispatch(getCocktail(id))
    }, [dispatch])
    
    
    return (
        <div className="single-cocktail">
            <h2>{cocktail?.name}</h2>
            <p>{cocktail?.liquorType}</p>
            <p>{cocktail?.ingredients}</p>
            <p>{cocktail?.directions}</p>
            <p>{cocktail?.imgUrl}</p>
        </div>
    )
}

export default SingleCocktail