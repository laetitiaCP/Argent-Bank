import axios from "axios";

const BASE_API_URL = "http://localhost:3001/api/v1/user";
const token = JSON.parse(localStorage.getItem("user"));
axios.defaults.headers.common['Authorization'] = "Bearer" + token;

/**
 * call API to get user's information in db
 * @returns {Promise<axios.AxiosResponse<any>>} return promise
 */
const getUserInfos = () => {
    return axios
        .post(BASE_API_URL + "/profile")
        .then( (response) => {
            return response.data.body
        })
}

/**
 * call API to set user's information (firstname and lastname) in db
 * @param {string} firstname new firstname
 * @param {lastname} lastname new lastname
 * @returns {Promise<axios.AxiosResponse<any>>} return promise
 */
const setUserInfos = (firstname, lastname) => {
    let newData = {
        firstName: firstname,
        lastName: lastname
    }
    return axios
        .put(BASE_API_URL + "/profile", newData)
        .then( (response) => {
            return response.data;
        })
}

const UserService = {
    getUserInfos,
    setUserInfos
}

export default UserService;