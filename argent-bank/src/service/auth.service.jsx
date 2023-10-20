import axios from "axios";

const BASE_URL = "http://localhost:3001/api/v1";

/**
 * web service call API login
 * @param {string} email username = email for login
 * @param {string} password password
 * @returns {Promise<axios.AxiosResponse<any>>} return promise
 */
const login = (email, password) => {
    return axios
        .post(BASE_URL + "/user/login", {
            email,
            password,
        })
        .then((response) => {
            if (response.data.body.token) {
                localStorage.setItem("user", JSON.stringify(response.data.body.token));
            }
            return response.data;
        });
};

/**
 * logout and remove item email in local storage
 */
const logout = () => {
    localStorage.removeItem("user");
};

const AuthService = {
    login,
    logout
}
export default AuthService;