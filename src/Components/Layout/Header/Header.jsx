import React from 'react';
import sushiImage from '../../../assets/003 sushi.jpg'
import styles from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";
const Header = (props) => {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>Япона Кухня</h1>
                <HeaderCartButton onShowCart={props.onShowCart}/>
            </header>
            <div className={styles['main-image']}>
                <img src={sushiImage} alt="Блюда японской кухни" />
            </div>
        </React.Fragment>
    );
};

export default Header;