import './Routes.scss';
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/home";
import SignIn from "./Pages/SignIn/signIn";
import User from "./Pages/User/user";

/**
 * All routes of app
 * @returns {JSX.Element} return element with app path defined
 * @constructor
 */
function RoutesApp() {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<SignIn />} />
        <Route path="/profile" element={<User />} />
    </Routes>
  )
}

export default RoutesApp;
