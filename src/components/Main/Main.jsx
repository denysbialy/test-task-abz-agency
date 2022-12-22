import React, { useState } from 'react';
import styles from './Main.module.sass';
import SectionInfo from './Sections/SectionInfo/SectionInfo';
import SectionWorkers from './Sections/SectionWorkers/SectionWorkers';
import SectionSignUp from './Sections/SectionSignUp/SectionSignUp';

const Main = () => {
    const formData = new FormData();
    const [usersList, setUsersList] = useState(6);
    
    return (
        <main className={styles.container}>
            <SectionInfo />
            <SectionWorkers usersList={usersList} setUsersList={setUsersList}/>
            <SectionSignUp formData={formData} usersList={usersList} setUsersList={setUsersList}/>
        </main>
    );
}

export default Main;
