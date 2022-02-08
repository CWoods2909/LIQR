
const GET_ALL_COCKTAILS = 'cocktail/getAllCocktails';
const CREATE_COCKTAIL = 'cocktail/createCocktail'
const SINGLE_COCKTAIL = 'cocktail/singleCocktail'

const fetchCocktails = (cocktails) => {
    return {
        type: GET_ALL_COCKTAILS,
        cocktails
    };
};

const createNewCocktail = (cocktail) => {
    return {
        type: CREATE_COCKTAIL,
        cocktail
    }
}

const singleCocktail = (cocktail) => {
    return{
        type: SINGLE_COCKTAIL,
        cocktail
    }
}

//thunk for all
export const getCocktails = () => async (dispatch) => {
    const response = await fetch('/api/cocktails');

    if (response.ok) {
        const cocktails = await response.json();

        dispatch(fetchCocktails(cocktails))
        return cocktails
    }
}

//thunk for a single cocktail
export const getCocktail = (cocktailId) => async (dispatch) => {
    const response = await fetch(`/api/cocktails/${cocktailId}`)
    
    if(response.ok) {
        const cocktail = await response.json();
        dispatch(singleCocktail(cocktail))
    }
    return response
}

//thunk to add new
export const createCocktail = (cocktail) => async (dispatch) => {
    const response = await fetch('/api/cocktails/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cocktail)
    })

    if (response.ok) {
        const cocktail = await response.json();
        dispatch(createNewCocktail(cocktail))
    }
    return cocktail
}


const initialState = { cocktails: {} }

//cocktailReducer
const cocktailReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COCKTAILS: {
            const newState = { ...state }
            const cocktailList = {}
            action.cocktails.forEach((cocktail) => (cocktailList[cocktail.id] = cocktail))
            newState.cocktails = cocktailList
            return newState;
        }
        case CREATE_COCKTAIL:{
            const newState = {...state}

        }
        default:
            return state
    }
}

export default cocktailReducer