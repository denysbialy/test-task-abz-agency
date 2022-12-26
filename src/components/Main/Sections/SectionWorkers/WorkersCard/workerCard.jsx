import React, { useState } from 'react';
import styles from './workerCard.module.sass';
import image from '../../../../../images/anonym.jpg';

const WorkerCard = ({worker}) => {
    const [hover, setHover] = useState(false);
    const [validImg, setValidImg] = useState(true);

    const blankPhoto = (src)=>{
            const img = new Image();
            img.src = src;
            img.onload = () => validImg;
            img.onerror = () => setValidImg(false);
            return validImg ? src : image;
    }
    
    return (
        <div className={styles.container} key={worker.registration_timestamp + worker.id}>
            <div className={styles.containerInfo}>
                <img src={blankPhoto(worker.photo)} alt="face" />
                <p>{worker.name}</p>
                <div>
                    <p>{worker.position}</p>
                    <p 
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >{worker.email}
                        {hover && <span className={styles.hidden}>{worker.email}</span>}
                    </p>
                    <p>{worker.phone}</p>
                </div>
            </div>
        </div>
    );
}

export default WorkerCard;
