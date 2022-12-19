import React from 'react';
import styles from './Main.module.sass';
import SectionInfo from './Sections/SectionInfo/SectionInfo';
import SectionWorkers from './Sections/SectionWorkers/SectionWorkers';
import SectionSignUp from './Sections/SectionSignUp/SectionSignUp';

const Main = () => {
    return (
        <main className={styles.container}>
            <SectionInfo />
            <SectionWorkers />
            <SectionSignUp />
        </main>
    );
}

export default Main;
