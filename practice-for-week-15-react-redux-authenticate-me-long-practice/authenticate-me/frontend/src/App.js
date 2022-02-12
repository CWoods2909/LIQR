import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import * as sessionActions from './store/session'
import Navigation from './components/Navigation'
import Cocktails from './components/Cocktails'
import CocktailForm from './components/Cocktails/newCocktail';
import SingleCocktail from './components/Cocktails/singleCocktail';
import EditCocktailForm from './components/Cocktails/editCocktail'
import DrinkList from './components/DrinkList/drinkList';


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true))
  }, [dispatch]);


  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/login">
            <LoginFormPage />
          </Route>
          
          <Route exact path='/signup'>
            <SignupFormPage />
          </Route>

          <Route exact path='/cocktails'>
            <Cocktails />
          </Route>

          <Route exact path='/cocktails/new'>
            <CocktailForm />
          </Route>

          <Route exact path='/cocktails/:id'>
            <SingleCocktail />
          </Route>

          <Route exact path='/cocktails/:id'>
          <EditCocktailForm />
          </Route>

          <Route exact path='/'>
            <DrinkList />
          </Route>

          <Route>
            Sorry this is not the route youre looking for.
          </Route>

        </Switch>
      )}
    </>
  );
}

export default App;
