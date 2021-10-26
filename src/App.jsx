import { useEffect } from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import UploadProduct from './pages/UploadProduct';
import Account from './pages/Account';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './actions';

const App = () => {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn())
    }
  }, [])

  console.log(auth.authenticate);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/product/:id">
        <ProductDetail />
      </Route>
      <Route path="/upload">
        {!auth.authenticate ? <Redirect to="/register" /> : <UploadProduct />}
      </Route>
      <Route path="/account">
        <Account />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  )
}

export default App;
