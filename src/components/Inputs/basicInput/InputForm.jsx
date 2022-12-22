import { ErrorMessage, Field } from 'formik';
import React from 'react';
import styles from './inputForm.module.sass';
import classNames from 'classnames';

const InputForm = ({name, errors, touched}) => {
    const input = classNames({
        [styles.input]: true,
        [styles.inputError]: errors[name] && touched[name]
    } )
    const redErrorMessage = classNames({
        [styles.errorMessage]: errors[name] && touched[name]
    })
    const redLebelMessage = classNames({
        [styles.nameInputLabel]: true,
        [styles.lebelErrorMessage]: errors[name] && touched[name]
    });
    
    return (
            <div className={styles.container}>
            <Field name={name} placeholder={`Your ${name}`} className={input}/>
            <div className={redLebelMessage}>{name}</div>
            
            {name === 'phone' && !errors.phone && 
            <div className={styles.formatPhone}>+38 (XXX) XXX - XX - XX</div>}

            {errors[name] && touched[name] && <ErrorMessage name={name}>{msg => <div className={redErrorMessage}>{msg}</div>}</ErrorMessage>}
            </div>
    );
}

export default InputForm;
