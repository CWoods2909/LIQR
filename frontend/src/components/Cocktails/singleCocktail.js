import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import { getCocktail, removeCocktail, } from "../../store/cocktails";
import EditCocktailForm from './editCocktail'
import AddToList from '../DrinkList/addDrink'

const SingleCocktail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const cocktail = useSelector(state => state.cocktail?.cocktails[id])
    const user = useSelector(state => state.session?.user)
    const history = useHistory()

    useEffect(() => {
        if (!id) return
        (async() => {
            await dispatch(getCocktail(id))
        })()
    }, [dispatch, id])
    
    

    const editForm = (e) => {
        openForm(true);
    }

    const [closeForm, openForm] = useState(false);


    const handleDelete = async (id) => {
        await dispatch(removeCocktail(id))
        history.push('/cocktails')
    }

    const handleBrokenImg = (event) => {
        event.target.src = "https://www.dailyactor.com/wp-content/uploads/2013/05/the-great-gatsby-leonardo-dicaprio.jpg"
    }


    return (
        <>
            
                <div className="info-container">
                    <div className="img-edit-form">
                    <img src={cocktail?.imgUrl} alt='cocktail' className='single-cocktail-image' onError={handleBrokenImg}/>    
                    {closeForm && (<EditCocktailForm openForm={openForm} />)}
                    </div>
                    <h2 className="cocktail-name-single">{cocktail?.name}</h2>
                    <ul className="cocktail-details">
                        <li>Liquor Type: {cocktail?.liquorType}</li>
                        <li>Ingredients: {cocktail?.ingredients}</li>
                        <li>How To Make: {cocktail?.directions}</li>
                    </ul>
                <div className="button-styles">
                    {user.id === cocktail?.userId &&
                        (<div><button type='button' onClick={() => handleDelete(cocktail.id)}>Delete</button>
                            <button type='button' onClick={editForm}>Edit</button></div>)}
                            <AddToList />
                </div>
                        </div>
            
        </>
    )
}

export default SingleCocktail