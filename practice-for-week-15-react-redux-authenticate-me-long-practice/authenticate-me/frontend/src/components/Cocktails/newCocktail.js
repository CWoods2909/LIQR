import { useState} from 'react';
import { useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createCocktail } from '../../store/cocktails';

const liquor = ['Whiskey', 'Vodka', 'Gin', 'Rum', 'Tequila']

const CocktailForm = ({ hideForm }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [name, setName] = useState('');
    const [liquorType, setLiquorType] = useState(liquor[0]);
    const [ingredients, setIngredients] = useState('');
    const [directions, setDirections] = useState('');
    const [imgUrl, setImgUrl] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const cocktail = {
            name,
            liquorType,
            ingredients,
            directions,
            imgUrl
        };
        let newCocktail = await dispatch(createCocktail(cocktail));
        if (newCocktail) {
            history.push('/cocktails')
            hideForm()
        }

    }

    const cancelSubmit = (e) => {
        e.preventDefault()
        hideForm()
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
                <select value={liquorType} onChange={(e) => setLiquorType(e.target.value)}>
                    {liquor.map(ele =>
                        <option key={ele}>{ele}</option>
                    )}
                </select>
                <input
                    type='text'
                    placeholder='Ingredients'
                    required
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                />
                <input
                    type='text'
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
                <button type='submit'>Create Cocktail</button>
                <button type='button' onClick={cancelSubmit}>Cancel</button>
            </form>
        </section>
    )
}

export default CocktailForm