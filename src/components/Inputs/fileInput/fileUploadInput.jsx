import React, { useState } from 'react';
import classNames from 'classnames';

import { ErrorMessage } from 'formik';

import styles from './FileUploadInput.module.sass';

const FileUploadInput = ({setFieldValue, errors, touched}) => {
    const [fileName, setFileName] = useState('Upload your photo');
    const redErrorMessage = classNames({
        [styles.errorMessage]: errors.position_id && touched.position_id
    });

    return (
        <>
            <label for='file' className={styles.container}>
                <div className={styles.uploadButton}>Upload</div>
                <input className={styles.notIsVisibility} id='file' name='photo' type='file' accept='.jpg, .jpeg' onChange={event => {
                setFileName(event.target.files[0].name)
                setFieldValue('photo', event.target.files[0])}}/>
                <div className={styles.fileName}>{fileName}</div>
            </label>
            {errors.photo && touched.photo && <ErrorMessage name='position_id'>
                {msg => <div className={redErrorMessage}>{msg}</div>}
              </ErrorMessage>}
        </>
    );
}

export default FileUploadInput;
