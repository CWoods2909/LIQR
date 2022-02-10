import { useEffect,useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory,Redirect } from 'react-router-dom';
import { createCocktail } from '../../store/cocktails';

import './allcocktails.css'

const liquor = ['Whiskey', 'Vodka', 'Gin', 'Rum', 'Tequila']

const CocktailForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((state) => state.session.user)
    
    
    const [name, setName] = useState('');
    const [liquorType, setLiquorType] = useState(liquor[0]);
    const [ingredients, setIngredients] = useState('');
    const [directions, setDirections] = useState('');
    const [imgUrl, setImgUrl] = useState('')
    const [errors, setErrors] = useState([]);
    
    useEffect(() =>{
        const validate = [];

        if(name.length < 3) validate.push('Cocktail name must be more than 3 charachters.');
        if(name.length > 50) validate.push('Cocktail name must be less than 50 charachters.')
        if(ingredients.length === 0) validate.push('Please provide the ingredients for your cocktail.');
        if(directions.length === 0) validate.push('Please provide the directions for your cocktail.');
        setErrors(validate)
    },[name,ingredients,directions])
    
    if(!user){
        return(
            <Redirect to='/'/>
        )
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const cocktail = {
            userId:user.id,
            name,
            liquorType,
            ingredients,
            directions,
            imgUrl
        };

        let newCocktail = await dispatch(createCocktail(cocktail));
        if (newCocktail) {
            history.push('/cocktails')
            
        }

    }

    const cancelSubmit = (e) => {
        e.preventDefault()
        history.push('/cocktails')
    }



    return (
        <section className="new-cocktail-form">
            <form onSubmit={handleSubmit} className="cocktail-form">
            <h2>Create Your Cocktail</h2>
                <ul className='errors'>
                    {errors.map((error)=>(
                        <li key={error}>{error}</li>
                    ))}
                </ul>
                <input
                    type='text'
                    placeholder='Cocktail name'
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <textarea
                    placeholder='Ingredients'
                    required
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                />
                <textarea
                    placeholder='How to prepare'
                    required
                    value={directions}
                    onChange={(e) => setDirections(e.target.value)}
                />
                    <input
                        type='text'
                        placeholder='Cocktail Image(please use image address)'
                        value={imgUrl}
                        onChange={(e) => setImgUrl(e.target.value)}
                    />
                <select value={liquorType} onChange={(e) => setLiquorType(e.target.value)}>
                    {liquor.map(ele =>
                        <option key={ele}>{ele}</option>
                    )}
                </select>
                <button type='submit' disabled={errors.length > 0}>Create Cocktail</button>
                <button type='button' onClick={cancelSubmit}>Cancel</button>
            </form>
        </section>
    )
}

export default CocktailForm