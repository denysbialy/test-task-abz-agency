import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../../Button/Button';
import styles from './SectionInfo.module.sass';
import CONSTANTS from '../../../../constants';
import { createWorkerClearData } from '../../../../redux/actions';

const SectionInfo = () => {
    const dispatch = useDispatch()
    const clear = () => dispatch(createWorkerClearData());
    const clearData = () => clear();

    return (
        <section className={styles.imgBackground}>
            <div className={styles.positionsText}>
                <h1>{CONSTANTS.H1}</h1>
                <p>{CONSTANTS.INFORMATION}</p>
                <Button name='Sign Up' href='#signup' handler={clearData} />
            </div>
        </section>
    );
}

export default SectionInfo;
