import React from 'react';
import styles from './ShowErrorMessage.module.sass';


const ShowErrorMessage = ({error}) => {
    return (
        <div className={styles.errorContainer}>
            <p>{error.message}</p>
        </div>
    );
}

export default ShowErrorMessage;
