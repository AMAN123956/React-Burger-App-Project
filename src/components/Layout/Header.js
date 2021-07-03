import React from 'react'
import styles from './Header.module.css'
import mealImg from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

function Header() {
    return (
       <React.Fragment>
            <header className={styles.header}>
                <h1>React Meals</h1>
                <HeaderCartButton />
            </header>
            <div className={styles['main-image']}>
                <img src={mealImg} alt="meal-img" />
            </div>
       </React.Fragment>
    )
}

export default Header
