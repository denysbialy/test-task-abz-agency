import React from 'react';
import styles from './Button.module.sass';

const Button = ({href, name}) => {
    return (
        <>
            <a href={href}>
                <button className={styles.containerButton}>{name}</button>
            </a>
        </>
)}

export default Button;
