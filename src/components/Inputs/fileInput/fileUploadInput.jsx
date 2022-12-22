import React, { useState } from 'react';
import classNames from 'classnames';

import { ErrorMessage } from 'formik';

import styles from './FileUploadInput.module.sass';

const FileUploadInput = ({setFieldValue, errors, touched}) => {
    const [fileName, setFileName] = useState('Upload your photo');
    const redErrorMessage = classNames({
        [styles.errorMessage]: errors.photo && touched.photo
    });

    return (
        <div>
            <label htmlFor='file' className={styles.container}>
                <div className={styles.uploadButton}>Upload</div>
                <input className={styles.notIsVisibility} id='file' name='photo' type='file' accept='.jpg, .jpeg' onChange={event => {
                event.target.files[0] ? 
                 setFileName(event.target.files[0].name)
                 : 
                 setFileName('Upload your photo')
                setFieldValue('photo', event.target.files[0])}}/>
                <div className={styles.fileName}>{fileName}</div>
            </label>
            {errors.photo && <ErrorMessage name='photo'>
                {msg => <div className={redErrorMessage}>{msg}</div>}
            </ErrorMessage>}
        </div>
    );
}

export default FileUploadInput;
