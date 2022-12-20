import axios from "axios";

export const workingUser = (action) =>
    axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${action}`)
    .then(res => res.data)
export const createWorker = (values) =>
    axios.post('https://frontend-test-assignment-api.abz.agency/api/v1/users', values)
    .then(res => res.data)