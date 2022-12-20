import axios from "axios";

export const workingUser = (action) =>
    axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${action}`)
    .then(res => res.data)

export const createWorker = async (values, token) =>{
    return await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', { method: 'POST', body: values, headers: { 'Token': token }, })
    .then(response => response.json())
    .then(data => data ) 
    .catch(error => error);
}

export const getToken = () => 
    axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token')
    .then(res => res.data.token);

export const getPositions = () => 
    axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
    .then(res => res.data.positions);
