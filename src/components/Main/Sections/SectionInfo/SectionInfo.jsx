import React from 'react';
import Button from '../../../Button/Button';
import styles from './SectionInfo.module.sass';
import CONSTANTS from '../../../../constants';

const SectionInfo = () => {
    return (
        <section className={styles.imgBackground}>
            <div className={styles.positionsText}>
                <h1>{CONSTANTS.H1}</h1>
                <p>{CONSTANTS.INFORMATION}</p>
                <Button name='Sign Up' href='#signup' />
            </div>
        </section>
    );
}

export default SectionInfo;
