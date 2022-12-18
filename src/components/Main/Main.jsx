import React from 'react';
import styles from './Main.module.sass';
import SectionInfo from './Sections/SectionInfo/SectionInfo';
import UserList from './Sections/SectionWorkers/SectionWorkers';

const Main = () => {
    return (
        <main className={styles.container}>
            <SectionInfo />
            <UserList />
        </main>
    );
}

export default Main;
