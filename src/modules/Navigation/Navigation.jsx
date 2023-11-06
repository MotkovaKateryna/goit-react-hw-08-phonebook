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
    <div className={styles.wrp}>
       <p className={styles.welctext}> Welcome, {userName.name}</p>
        <button className={styles.logout_btn} onClick={onLogOut}>Logout</button>  
    </div>
       
    </>
    :
    <div className={styles.wrp}>
     <NavLink className ={styles.link} to ="/login">Login</NavLink>
    <NavLink className ={styles.link} to ="/register">Register</NavLink> 
    </div>
     }
    
    
  </nav>
</header>
  )
}

export default Navigation