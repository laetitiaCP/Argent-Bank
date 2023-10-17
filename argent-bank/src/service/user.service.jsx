import axios from "axios";

const BASE_API_URL = "http://localhost:3001/api/v1/user";
const token = JSON.parse(localStorage.getItem("user"));
axios.defaults.headers.common['Authorization'] = "Bearer" + token;

const getUserInfos = () => {
    return axios
        .post(BASE_API_URL + "/profile")
        .then( (response) => {
            return response.data.body
        })
}

const setUserInfos = (firstname, lastname) => {
    let newData = {
        firstName: firstname,
        lastName: lastname
    }
    console.log(newData)
    return axios
        .put(BASE_API_URL + "/profile", newData)
        .then( (response) => {
            console.log(response)
            return response.data;
        })
}

const UserService = {
    getUserInfos,
    setUserInfos
}

export default UserService;