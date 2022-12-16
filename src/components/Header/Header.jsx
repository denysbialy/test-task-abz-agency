import React from 'react';
import Button from '../Button/Button';
import Logo from './Logo';
import styles from './Header.module.sass';

const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.head}>
                <div>
                    <Logo />
                </div>
                <div className={styles.buttons}>
                    <Button name='Users' href='#users'/>
                    <Button name='Sign Up' href='#signup'/>
                </div>
            </div>
        </header>
    );
}

export default Header;
