import { csrfFetch } from './csrf';

const GET_ALL_COCKTAILS = 'cocktail/GET_ALL_COCKTAILS';
const CREATE_COCKTAIL = 'cocktail/CREATE_COCKTAIL'
const SINGLE_COCKTAIL = 'cocktail/SINGLE_COCKTAIL'
const DELETE_COCKTAIL = 'cocktail/DELETE_COCKTAIL'

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
    return {
        type: SINGLE_COCKTAIL,
        cocktail
    }
}

const deleteCocktail = (cocktail) => {
    return{
        type: DELETE_COCKTAIL,
        cocktail
    }
}

//thunk to edit
export const editCocktail = (cocktail,id) => async (dispatch) =>{
    const response = await csrfFetch(`/api/cocktails/${id}`,{
        method: 'PUT',
        headers:{ 'Content-Type': 'application/json' },
        body: JSON.stringify(cocktail)
    })
    if(response.ok){
        const cocktail = await response.json()
        dispatch(singleCocktail(cocktail))
        return cocktail
    }

}

//thunk for all
export const getCocktails = () => async (dispatch) => {
    const response = await csrfFetch('/api/cocktails');

    if (response.ok) {
        const cocktails = await response.json();
        dispatch(fetchCocktails(cocktails))
        return cocktails
    }
}

//thunk for a single cocktail
export const getCocktail = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/cocktails/${id}`,{
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify()
    })
    if (response.ok) {
        const cocktail = await response.json();
        dispatch(singleCocktail(cocktail))
        return cocktail
    }

}

//thunk to add new
export const createCocktail = (cocktail) => async (dispatch) => {
    const response = await csrfFetch('/api/cocktails/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cocktail)
    })

    if (response.ok) {
        const cocktail = await response.json();
        dispatch(createNewCocktail(cocktail))
        return cocktail
    }
}

//thunk to delete
export const removeCocktail = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/cocktails/${id}`,{
        method: 'DELETE',
        headers:{'Content-Type': 'application/json'}
    })

    if(response.ok){
        const deleted = await response.json()
        dispatch(deleteCocktail(deleted, id))
        return deleted
    }
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
        case CREATE_COCKTAIL: {
            const newState = { ...state }
            newState.cocktails = { ...newState.cocktails, [action.cocktail.id]: action.cocktail }
            return newState
        }
        case SINGLE_COCKTAIL: {
            const newState = {...state}
            newState.cocktails = {[action.cocktail.id]: action.cocktail}
            return newState;
        }
        case DELETE_COCKTAIL:{
            const newState = { ...state };
            delete newState[action.cocktail.id];
            return newState;
        }   
        default:
            return state
    }
}

export default cocktailReducer