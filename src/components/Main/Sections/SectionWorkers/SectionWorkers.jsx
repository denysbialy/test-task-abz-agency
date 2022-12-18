import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { workerRequest} from '../../../../redux/actions';

const UserList = (props) => {
  const [usr, setUsr] = useState(6);
const dispatch = useDispatch();

const requestWorkers = (options) => dispatch(workerRequest(options));
const showUsers = () => setUsr(usr + 6);

useEffect(() => {
  requestWorkers(usr);
}, [usr]);

const {workers, isLoading, error} = useSelector((state) => state.worker || []);
    
  return (
    <div>
      {isLoading && <div>LOADING </div>}
      {error && <div>{error}</div>}
      {console.log(workers)}
      {workers.sort((w1, w2) => w2.registration_timestamp - w1.registration_timestamp)
        .map((worker) => (
          <div key={worker.id}>
            {worker.name} <br/>
            {worker.email}<br/>
            {worker.registration_timestamp}<br/>
          </div>
      ))}
      <button onClick={() => {requestWorkers(usr); showUsers()}}>Load More</button>
      
    </div>
  );
};
export default UserList;