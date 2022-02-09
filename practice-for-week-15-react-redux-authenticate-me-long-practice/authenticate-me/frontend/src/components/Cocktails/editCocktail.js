import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editCocktail } from '../../store/cocktails';
import { useParams } from 'react-router-dom';

const EditCocktailForm = ({ hideForm}) => {
    const id = useParams();
    const cocktails = useSelector(state => state.cocktail.cocktails[id])
    const dispatch = useDispatch();
    const liquor = ['Whiskey', 'Vodka', 'Gin', 'Rum', 'Tequila']

    const [name, setName] = useState(cocktails.name);
    const [liquorType, setLiquorType] = useState(cocktails.liquorType);
    const [ingredients, setIngredients] = useState(cocktails.ingredients);
    const [directions, setDirections] = useState(cocktails.directions);
    const [imgUrl, setImgUrl] = useState(cocktails.imgUrl);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const cocktail = {
            name,
            liquorType,
            ingredients,
            directions,
            imgUrl
        }
        let updatedCocktail = await dispatch(editCocktail(cocktail, id))
        if(updatedCocktail) hideForm()
    }

    return (
        <section className='edit-cocktail-container'>
            <form className='edit-cocktail-form'>
            <input
                    type='text'
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <select value={liquorType} onChange={(e) => setLiquorType(e.target.value)}>
                    {liquor.map(ele =>
                        <option key={ele}>{ele}</option>
                    )}
                </select>
                <input
                    type='text'
                    required
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                />
                <input
                    type='text'
                    required
                    value={directions}
                    onChange={(e) => setDirections(e.target.value)}
                />
                <input
                    type='text'
                    value={imgUrl}
                    onChange={(e) => setImgUrl(e.target.value)}
                />
                <button type='submit' onClick={handleSubmit}>Submit edit</button>
                <button type='button'>Cancel</button>
            </form>
        </section>
    )
}

export default EditCocktailForm