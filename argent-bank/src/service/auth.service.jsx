import axios from "axios";

const BASE_URL = "http://localhost:3001/api/v1";

const login = (email, password) => {
    return axios
        .post(BASE_URL + "/user/login", {
            email,
            password,
        })
        .then((response) => {
            console.log(response.data.body.token)
            if (response.data.body.token) {
                localStorage.setItem("user", JSON.stringify(response.data.body.token));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const AuthService = {
    login,
    logout
}
export default AuthService;