import React, { useState } from 'react';
import styles from './workerCard.module.sass';
const WorkerCard = ({worker}) => {
    const [hover, setHover] = useState(false);
   
    return (
        <div className={styles.container} key={worker.registration_timestamp + worker.id}>
            <div className={styles.containerInfo}>
                <img src={worker.photo} alt="face" />
                <p>{worker.name}</p>
                <div>
                    <p>{worker.position}</p>
                    <p 
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >{worker.email}
                        {hover && <div className={styles.hidden}>{worker.email}</div>}
                    </p>
                    <p>{worker.phone}</p>
                </div>
            </div>
        </div>
    );
}

export default WorkerCard;
