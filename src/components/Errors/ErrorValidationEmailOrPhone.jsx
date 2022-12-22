import React from 'react';
import { useSelector } from 'react-redux';
import CONSTANTS from '../../constants';
import styles from './ErrorValidationEmailOrPhone.module.sass'
const ErrorValidationEmailOrPhone = () => {

    const creationData = useSelector((state) => state.creationWorker);

    return (
        <>
            {creationData.isLoading 
            && !creationData.success.success
            &&
             <div className={styles.errorMessage}>{CONSTANTS.DUBLICATE_ERROR_CREATION}</div>}
        </>
    );
}

export default ErrorValidationEmailOrPhone;
