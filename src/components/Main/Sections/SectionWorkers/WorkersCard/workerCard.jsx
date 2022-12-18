import React from 'react';
import styles from './workerCard.module.sass';
const WorkerCard = ({worker}) => {
    return (
        <div className={styles.container} key={worker.registration_timestamp + worker.id}>
            <div className={styles.containerInfo}>
                <img src={worker.photo} alt="face" />
                <p>{worker.name}</p>
                <div>
                    <p>{worker.position}</p>
                    <p>{worker.email}</p>
                    <p>{worker.phone}</p>
                </div>
            </div>
        </div>
    );
}

export default WorkerCard;
