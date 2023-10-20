import "./editName.scss";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setInfos} from "../../actions/setInfos";

/**
 * editName component
 * @param {string} firstname firstname in db
 * @param lastname lastname in db
 * @returns {JSX.Element} return component to edit firstname and lastname
 * @constructor
 */
function EditName({firstname, lastname}) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const dispatch = useDispatch();

    /**
     * get firstname entered by user
     * @param {object} e event
     */
    function onChangeFirstname(e) {
        setFirstName(e.target.value);
    }

    /**
     * get lastname entered by user
     * @param {object} e event
     */
    function onChangeLastname(e) {
        setLastName(e.target.value);
    }

    /**
     * action on button click to cancel
     */
    function cancelButton() {
        window.location.reload();
    }

    /**
     * action on button click to save informations
     * @param {Object} e event
     */
    function saveButton(e) {
        e.preventDefault();
        dispatch(setInfos(firstName, lastName))
            .then(() => {
                console.log('firstname et lastname modifiés');
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