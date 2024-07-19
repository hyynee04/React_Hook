import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FaPlus } from "react-icons/fa";
import { useState } from "react";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false)
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="user-content">
                <div className="btn-add-new">
                    <button 
                        className="btn-add"
                        onClick={() => setShowModalCreateUser(true)}
                    >
                        <FaPlus size={"0.8em"} />
                        Add new user
                    </button>
                </div>
                <div className="table-users-container">
                    table users
                </div>
                <ModalCreateUser 
                    show={showModalCreateUser} 
                    setShow={setShowModalCreateUser}
                />
            </div>
        </div>
    )
}

export default ManageUser;