import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { getCocktail } from "../../store/cocktails";

const SingleCocktail = () => {
    const { cocktailId } = useParams();
    const dispatch = useDispatch();
    const cocktail = useSelector(state => state.cocktail[cocktailId])

    useEffect(() => {
        dispatch(getCocktail(cocktailId))
    }, [dispatch, cocktailId])

    return (
        <div className="single-cocktail">

            {cocktail?.map(({ id, name, liquorType, ingredients, directions, imgUrl }) => (
                <ul key={id} className="cocktail-inputs">
                    <h2>{name}</h2>
                    <li>{liquorType}</li>
                    <li>{ingredients}</li>
                    <li>{directions}</li>
                    <li>{imgUrl}</li>
                </ul>
            ))
            }
        </div>
    )
}

export default SingleCocktail