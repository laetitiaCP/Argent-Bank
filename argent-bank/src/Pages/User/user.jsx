import "./user.scss";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {userInfos} from "../../actions/userInfos";
import EditName from "../../Components/editName/editName";

function User() {
    const dispatch = useDispatch();
    const [dataUser, setDataUser] = useState();
    const { isLoggedIn } = useSelector(state => state.auth);
    let firstname = "";
    let lastname = "";
    const [isDisplay, setIsDisplay] = useState(false);
    const [token, setToken] = useState("");

    useEffect( () => {
        setToken(localStorage.getItem("token"));
        if(token !== null) {
            dispatch(userInfos()).then( (response) => {
                setDataUser(response);
            })
        }
        }, [token])

    if (dataUser !== undefined) {
        firstname = dataUser.firstName;
        lastname = dataUser.lastName;
    }


    function editUsername() {
        setIsDisplay(true);
    }

    return (
        <div>
            <Header logged={isLoggedIn} firstname={firstname}/>
            <main className="main bg-dark">
                {!isDisplay &&
                    <div className="header" id="header">
                        <h1>Welcome back<br/>{firstname} {lastname}!</h1>
                        <button className="edit-button" onClick={editUsername}>Edit Name</button>
                    </div>
                }
                { isDisplay &&
                    <EditName firstname={firstname} lastname={lastname}/>
                }

                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default User;