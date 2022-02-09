import { useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createCocktail } from '../../store/cocktails';
import './allcocktails.css'

const liquor = ['Whiskey', 'Vodka', 'Gin', 'Rum', 'Tequila']

const CocktailForm = ({ hideForm }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((state) => state.session.user)
    
    const [name, setName] = useState('');
    const [liquorType, setLiquorType] = useState(liquor[0]);
    const [ingredients, setIngredients] = useState('');
    const [directions, setDirections] = useState('');
    const [imgUrl, setImgUrl] = useState('')

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
                        placeholder='Cocktail Image'
                        value={imgUrl}
                        onChange={(e) => setImgUrl(e.target.value)}
                    />
                <select value={liquorType} onChange={(e) => setLiquorType(e.target.value)}>
                    {liquor.map(ele =>
                        <option key={ele}>{ele}</option>
                    )}
                </select>
                <button type='submit'>Create Cocktail</button>
                <button type='button' onClick={cancelSubmit}>Cancel</button>
            </form>
        </section>
    )
}

export default CocktailForm