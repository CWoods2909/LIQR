import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editCocktail } from '../../store/cocktails';
import { useParams } from 'react-router-dom';

const EditCocktailForm = ({ openForm }) => {
    const { id } = useParams();
    const cocktails = useSelector(state => state.cocktail.cocktails[id])
    const dispatch = useDispatch();
    const liquor = ['Whiskey', 'Vodka', 'Gin', 'Rum', 'Tequila']


    const [name, setName] = useState(cocktails?.name);
    const [liquorType, setLiquorType] = useState(cocktails?.liquorType);
    const [ingredients, setIngredients] = useState(cocktails?.ingredients);
    const [directions, setDirections] = useState(cocktails?.directions);
    const [imgUrl, setImgUrl] = useState(cocktails?.imgUrl);
    const [errors, setErrors] = useState([]);
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
        if (updatedCocktail) {
            openForm(false)
        }
    }

    const cancelSubmit = (e) => {
        e.preventDefault()
        openForm(false)
    }

    useEffect(() =>{
        const validate = [];

        if(name.length < 3) validate.push('Cocktail name must be more than 3 charachters.');
        if(name.length > 50) validate.push('Cocktail name must be less than 50 charachters.')
        if(ingredients.length === 0) validate.push('Please provide the ingredients for your cocktail.');
        if(directions.length === 0) validate.push('Please provide the directions for your cocktail.');
        setErrors(validate)
    },[name,ingredients,directions])

    return (
        <section className='edit-cocktail-container'>
            <form className='edit-cocktail-form'>
                <h2>Edit Your Cocktail</h2>
                <ul className='errors'>
                    {errors.map((error)=>(
                        <li key={error}>{error}</li>
                    ))}
                </ul>
                <input
                    type='text'
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='name'
                />
                <select value={liquorType} onChange={(e) => setLiquorType(e.target.value)}>
                    {liquor.map(ele =>
                        <option key={ele}>{ele}</option>
                    )}
                </select>
                <textarea
                    type='text'
                    required
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    placeholder="ingredients"
                />
                <textarea
                    type='text'
                    required
                    value={directions}
                    onChange={(e) => setDirections(e.target.value)}
                    placeholder='directions'
                />
                <input
                    type='text'
                    value={imgUrl}
                    onChange={(e) => setImgUrl(e.target.value)}
                    placeholder='Cocktail image(please use image address)'
                />
                <button type='submit' onClick={handleSubmit} disabled={errors.length > 0}>Submit edit</button>
                <button type='button' onClick={cancelSubmit}>Cancel</button>
            </form>
        </section>
    )
}

export default EditCocktailForm