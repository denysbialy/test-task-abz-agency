import React from 'react';
import styles from './Button.module.sass';

const Button = ({href, name, handler, type}) => {
    return (
        <>
            <a href={href}>
                <button type={type} onClick={handler} className={styles.containerButton}>{name}</button>
            </a>
        </>
)}

export default Button;
