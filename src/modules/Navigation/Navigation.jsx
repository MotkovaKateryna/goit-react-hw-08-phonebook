import React from 'react'
import { NavLink } from 'react-router-dom';

import styles from "./navigation.module.scss"
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthAuthenticated, selectAuthUserData } from 'redux/auth/auth-selectors';
import { logOutThunk } from 'redux/auth/auth-operations';

const Navigation = () => {
    const authenticated = useSelector(selectAuthAuthenticated);
    const userName = useSelector(selectAuthUserData);
    const dispatch = useDispatch();
  

    const onLogOut = () => {
dispatch(logOutThunk());

    }
  return (
    <header>
  <nav className={styles.menu}>
    <NavLink className ={styles.link} to ="/">Home</NavLink>
    {authenticated ?  
    <><NavLink className ={styles.link} to ="/contacts">Contacts</NavLink>
     <p>Welcome,{userName.name}</p>
        <button onClick={onLogOut}>Logout</button>     
    </>
    :

    <>
    <NavLink className ={styles.link} to ="/login">Login</NavLink>
    <NavLink className ={styles.link} to ="/register">Register</NavLink></>
     }
    
    
  </nav>
</header>
  )
}

export default Navigation