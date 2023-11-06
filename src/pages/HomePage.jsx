import React from 'react';


import styles from "./home-page.module.scss";

const HomePage = () => {
  return (
    
    <div className={styles.wrapper}>
      <img src="https://thumbs.dreamstime.com/b/welcome-lettering-text-red-color-modern-calligraphy-style-vector-illustration-106181123.jpg" alt="welcome" width="200" />
    <div className={styles.section}>
      <h2 className={styles.welctext}>Still using a notepad to write down your contacts?</h2>
   
    <img src="https://th.bing.com/th/id/R.548be97e54bdc29f67d0bc6987fd8a2e?rik=mMbMwdfF6HJeDw&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fN%2fd%2f2%2fR%2fF%2fr%2fphone-book-hi.png&ehk=qPOdJlJWmICZAEdpt0cVqacYHZYiR8GiKosn3VJ2zeg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="phone" width="150" />
    </div>
    <h2 className={styles.head}>Here you go!</h2>
    <div className={styles.section}>
       <p className={styles.desc}>Here you will find a phone book to which you can add and delete contacts, and most importantly you will always have access to it!</p>
   
     </div>

     <div className={styles.section}>
      <p className={styles.desc} >All you have to do is create an account or log in!</p>
     </div> 
     <div className={styles.section}>
    
     </div>

     </div>
    
    
  )
}

export default HomePage

