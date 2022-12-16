import React from 'react';
import Button from '../../../Button/Button';
import styles from './SectionInfo.module.sass';

const SectionInfo = () => {
    return (
        <section className={styles.imgBackground}>
            <div className={styles.positionsText}>
                <h1>Test assignment for front-end developer</h1>
                <p>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
                <Button name='Sign Up' href='#signup' />
            </div>
        </section>
    );
}

export default SectionInfo;
