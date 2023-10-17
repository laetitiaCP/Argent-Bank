import "./signIn.scss";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate, Navigate} from "react-router-dom";
import {login} from "../../actions/auth";

function SignIn(props) {
    let navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    let locEmail = localStorage.getItem("email");

    const { isLoggedIn } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    useEffect( () => {
        if (locEmail !== null) {
            setRememberMe(true);
            setUsername(locEmail);
        }
    },[locEmail]);

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (rememberMe) {
            localStorage.setItem("email", username);
        } else {
            localStorage.removeItem("email");
            }

        dispatch(login(username, password))
                .then(() => {
                    navigate("/profile");
                    window.location.reload();
                })
                .catch((error) => {
                    console.log(error)
                });
    };

    if (isLoggedIn) {
        return <Navigate to="/profile" />;
    }

    const handleRememberMe = () => {
        setRememberMe(!rememberMe);
    }

    return (
        <div className="container">
            <Header />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={handleLogin}>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={onChangeUsername}
                        />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={onChangePassword}
                            />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" checked={rememberMe} onChange={handleRememberMe}/>
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button className="sign-in-button" type="submit">
                            Sign In
                        </button>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default SignIn;