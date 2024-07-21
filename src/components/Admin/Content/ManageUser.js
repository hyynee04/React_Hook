import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FaPlus } from "react-icons/fa";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUsers } from '../../../services/apiService';

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false)
    const [listUsers, setListUsers] = useState([])

    useEffect(() => {
        fetchListUsers()
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUsers()
        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }



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
                    <TableUser listUsers={listUsers}/>
                </div>
                <ModalCreateUser 
                    show={showModalCreateUser} 
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                />
            </div>
        </div>
    )
}

export default ManageUser;