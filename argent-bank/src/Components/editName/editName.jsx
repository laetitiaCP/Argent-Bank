import "./editName.scss";
import {useState} from "react";
function EditName({firstname, lastname}) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    function onChangeFirstname(e) {
        setFirstName(e.target.value);
    }

    function onChangeLastname(e) {
        setLastName(e.target.value);
    }

    function cancelButton() {

    }

    function saveButton() {

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