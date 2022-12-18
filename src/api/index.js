import axios from "axios";

export 
const workingUser = (action) =>
    axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${action}`)
    .then(res => res.data.users)