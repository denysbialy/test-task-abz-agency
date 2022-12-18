import React from 'react';
import styles from './Button.module.sass';

const Button = ({href, name, handler}) => {
    return (
        <>
            <a href={href}>
                <button onClick={handler} className={styles.containerButton}>{name}</button>
            </a>
        </>
)}

export default Button;
