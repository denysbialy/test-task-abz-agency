import React from 'react';
import { useSelector } from 'react-redux';
import { ErrorMessage, Field } from 'formik';
import classNames from 'classnames';

import CONSTANTS from '../../../constants';
import styles from './radioInputs.module.sass'

const RadioInputs = ({errors, touched}) => {

    const data = useSelector((state) => state.positions);

    const redErrorMessage = classNames({
        [styles.errorMessage]: errors.position_id && touched.position_id
    })

    return (
        <div className={styles.radioInputsContainer}>
              <h2>{CONSTANTS.SELECT_POSITION}</h2>
              {data.positions.map(e => {
                return (
                  <label key ={e.id+10}> 
                  <Field name='position_id' type="radio" value={e.id+''} />
                  <span className={styles.radioInput}>{e.name}</span>
                  </label>
                )
              })}
              {errors.position_id && touched.position_id && 
              <ErrorMessage name='position_id'>
                {msg => <div className={redErrorMessage}>{msg}</div>}
              </ErrorMessage>}
            </div>
    );
}

export default RadioInputs;
