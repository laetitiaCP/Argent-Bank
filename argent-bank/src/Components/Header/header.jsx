import "./header.scss";
import logoBank from "../../Images/argentBankLogo.png";
import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {logout} from "../../actions/auth";

/**
 * header component
 * @param {boolean} logged if logged, login button display else button logout display
 * @param {string} firstname firstname user to display
 * @returns {JSX.Element} return header component
 * @constructor
 */
function Header({logged, firstname}) {
    const dispatch = useDispatch();

    const logOut = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={logoBank}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            {!logged &&
                <div>
                    <Link className="main-nav-item" to="/login">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                </div>
            }
            {logged &&
                <div>
                    <a className="main-nav-item" href="/profile">
                        <i className="fa fa-user-circle"></i>
                        {firstname}
                    </a>
                    <a className="main-nav-item" href="/" onClick={logOut}>
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </a>
                </div>
            }
        </nav>
    )
}

export default Header;