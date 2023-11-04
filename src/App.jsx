
import { useEffect,lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes} from 'react-router-dom';

import { refreshThunk } from 'redux/auth/auth-operations';

import Navigation from 'modules/Navigation/Navigation';
import PrivateRoute from 'modules/PrivateRoute';
import RestrictedRoute from 'modules/RestrictedRoute';

import Loader from 'shared/Loader/Loader';

const HomePage  = lazy (()=>import('./pages/HomePage'));
const RegisterPage  = lazy (()=>import('./pages/RegisterPage'));
const LoginPage  = lazy (()=>import('./pages/LoginPage'));
const ContactsPage  = lazy (()=>import('./pages/ContactsPage'));


const appRoutes = [
  {path: "/", element :<HomePage/> },
  {path: "/register", element : (<RestrictedRoute ><RegisterPage/></RestrictedRoute>) },
  {path: "/login", element : <RestrictedRoute ><LoginPage/> </RestrictedRoute>},
  {path: "/contacts", element :<PrivateRoute><ContactsPage/></PrivateRoute>  },
]

export const App = () => {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(refreshThunk());
  },[dispatch])
  return (
    <>
<Navigation/>
<Suspense fallback={<Loader/>}>
  <Routes>
    {appRoutes.map(({path,element}) =>(<Route key={path} path ={path} element ={element}> </Route> ) )}
  </Routes>

</Suspense>

    </>
  );
};
