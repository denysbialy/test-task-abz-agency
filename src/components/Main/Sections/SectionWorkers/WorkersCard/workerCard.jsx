import React from 'react';
import styles from './workerCard.module.sass';
const WorkerCard = ({worker}) => {
    return (
        <div className={styles.container}>
            <div className={styles.pad}>
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
