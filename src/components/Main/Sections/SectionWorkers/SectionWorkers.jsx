import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { workerRequest} from '../../../../redux/actions';
import styles from './SectionWorkers.module.sass';
import CONSTANTS from '../../../../constants';
import WorkerCard from './WorkersCard/workerCard';
import Button from '../../../Button/Button';
import ClipLoader from "react-spinners/ClipLoader";
import ShowErrorMessage from '../../../Errors/ShowErrorMessage';

const SectionWorkers = ({usersList, setUsersList}) => {
  const [showWorkers, setShowWorkers] = useState(6);

  const dispatch = useDispatch();
  const {workers:{users}, isLoading, error} = useSelector((state) => state.worker);
  const requestWorkers = (options) => dispatch(workerRequest(options));

  useEffect(() => { requestWorkers(usersList)}, [usersList]);
    
  const showUsers = (users || []).sort((w1, w2) => w2.registration_timestamp - w1.registration_timestamp).slice(0, showWorkers);

  return (
    <section className={styles.container} id='users'>
      <h2>{CONSTANTS.GET_SHOW_WORKERS_REQUEST_H2}</h2>
      {isLoading && <ClipLoader color={'#00BDD3'} loading={isLoading} size={150}/>}
      {error && <ShowErrorMessage error={error}/>}
      
      {!error && !isLoading && 
      <>
      <div className={styles.containerCard}>
        {showUsers.map((worker, index) => (
            <WorkerCard worker={worker} key={index}/>
            ))}
      </div>
          {showWorkers <= (showUsers || []).length && 
      <Button name='Show More' handler={() => setShowWorkers(showWorkers + 6)} /> }

      </>
      }
    </section>
  );
};
export default SectionWorkers;