import "./editName.scss";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setInfos} from "../../actions/setInfos";

function EditName({firstname, lastname}) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const dispatch = useDispatch();

    function onChangeFirstname(e) {
        setFirstName(e.target.value);
    }

    function onChangeLastname(e) {
        setLastName(e.target.value);
    }

    function cancelButton() {
        window.location.reload();
    }

    function saveButton(e) {
        e.preventDefault();
        console.log(firstName)
        console.log(lastName)
        dispatch(setInfos(firstName, lastName))
            .then(() => {
                console.log('ok');
            })
            .catch((error) => {
                console.log(error);
            })
        window.location.reload();
    }

    return (
        <div>
            <h1>Welcome back</h1>
            <form>
                <div className="user-wrapper">
                    <div className="user-wrapper__inputs">
                        <label htmlFor="firstname">{firstname}</label>
                        <input type="text" value={firstName} placeholder={firstname} onChange={onChangeFirstname}/>
                    </div>
                    <div className="user-wrapper__inputs">
                        <label htmlFor="lastname">{lastname}</label>
                        <input type="text" value={lastName} placeholder={lastname} onChange={onChangeLastname}/>
                    </div>
                </div>
                <div className="button-wrapper">
                    <button onClick={saveButton}>Save</button>
                    <button onClick={cancelButton}>Cancel</button>
                </div>


            </form>
        </div>
    )
}

export default EditName;