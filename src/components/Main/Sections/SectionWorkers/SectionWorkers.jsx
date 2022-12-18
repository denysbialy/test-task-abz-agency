import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { workerRequest} from '../../../../redux/actions';
import styles from './SectionWorkers.module.sass';
import CONSTANTS from '../../../../constants';
import WorkerCard from './WorkersCard/workerCard';
import Button from '../../../Button/Button';
import ClipLoader from "react-spinners/ClipLoader";

const UserList = (props) => {
  const [usersList, setUsersList] = useState(6);
  const dispatch = useDispatch();
  const {workers, isLoading, error} = useSelector((state) => state.worker || []);
  const {users} = workers;
  const requestWorkers = (options) => dispatch(workerRequest(options));

  useEffect(() => { requestWorkers(usersList)}, [usersList]);
    
  return (
    <div className={styles.container}>
      <h2>{CONSTANTS.GET_REQUEST_H2}</h2>
      {isLoading && <ClipLoader color={'black'} loading={isLoading} size={150}/>}
      {error && <div>{error.message}</div>}
      {!error && !isLoading && 
      <div className={styles.containerCard}>
        {(users || []).sort((w1, w2) => w2.registration_timestamp - w1.registration_timestamp)
          .map((worker) => (
            <WorkerCard worker={worker} />
        ))}
          {usersList === (users || []).length && 
          <Button name='Show More' handler={() => setUsersList(usersList + 6)} /> }
      </div>

      }
      
    </div>
  );
};
export default UserList;