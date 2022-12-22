import React from 'react';
import Button from '../Button/Button';
import Logo from './Logo';
import styles from './Header.module.sass';
import { createWorkerClearData } from '../../redux/actions';
import { useDispatch } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch()
    const clear = () => dispatch(createWorkerClearData());
    const clearData = () => clear();
    
    return (
        <header className={styles.container}>
            <div className={styles.head}>
                <div>
                    <Logo />
                </div>
                <div className={styles.buttons}>
                    <Button name='Users' href='#users'/>
                    <Button name='Sign Up' href='#signup' handler={clearData}/>
                </div>
            </div>
        </header>
    );
}

export default Header;
