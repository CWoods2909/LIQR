import { csrfFetch } from "./csrf";

const ADD_COCKTAIL = 'cocktail/ADD_COCKTAIL';
const DELETE_COCKTAIL_FROM_LIST = 'cocktail/DELETE_COCKTAIL_FROM_LIST';

const addToList = (cocktail) => {
    return {
        type: ADD_COCKTAIL,
        cocktail
    };
};

const deleteFromList = (cocktail) => {
    return {
        type: DELETE_COCKTAIL_FROM_LIST,
        cocktail
    };
};

//thunk to add a cocktail to drink list
export const addCocktailToList = (cocktail, id) => async (dispatch) => {
    const response = await csrfFetch('/api/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cocktail)
    });

    if (response.ok) {
        const cocktail = await response.json()
        dispatch(addToList(cocktail, id))
        return cocktail
    };
};

//thunk to delete from drink list
export const deleteFromDrinkList = (id) => async (dispatch) => {
    const response = await csrfFetch('/api/', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        const deleted = await response.json()
        dispatch(deleteFromList(deleted, id))
        return deleted
    };
};

const initialState = { cocktails: {} };

//drinkList reducer
const drinkListReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_COCKTAIL:{
            const newState = {...state};
            newState.cocktails = {...newState.cocktails, [action.cocktail.id]: action.cocktail}
            return newState
        }
        case DELETE_COCKTAIL_FROM_LIST:{
            const newState = {...state};
            delete newState[action.cocktail.id];
            return newState
        }
        default:
            return state
    }
}

export default drinkListReducer