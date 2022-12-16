import React from 'react';
import styles from './Main.module.sass';
import SectionInfo from './Sections/SectionInfo/SectionInfo';

const Main = () => {
    return (
        <main className={styles.container}>
            <SectionInfo />
        </main>
    );
}

export default Main;
