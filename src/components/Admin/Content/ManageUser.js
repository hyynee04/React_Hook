import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { getAllUsers, getUserWithPaginate } from '../../../services/apiService';
import './ManageUser.scss';
import ModalCreateUser from "./ModalCreateUser";
import ModalDeleteUser from "./ModalDeleteUser";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import TableUserPaginate from "./TableUserPaginate";


const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false)
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)
    const [showModalViewUser, setShowModalViewUser] = useState(false)
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false)

    const [dataUpdate, setDataUpdate] = useState({})
    const [dataView, setDataView] = useState({})
    const [dataDelete, setDataDelete] = useState({})

    const LIMIT_USER = 6
    const [pageCount, setPageCount] = useState(0)
    const [listUsers, setListUsers] = useState([])

    useEffect(() => {
        fetchListUsersWithPaginate(1)
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUsers()
        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }

    const fetchListUsersWithPaginate = async (page) => {
        let res = await getUserWithPaginate(page, LIMIT_USER)
        if (res.EC === 0) {
            console.log(">> respone.dt = ", res.DT.users)
            setListUsers(res.DT.users)
            setPageCount(res.DT.totalPages)
        }
    }

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true)
        setDataUpdate(user)
    }

    const handleClickBtnView = (user) => {
        setShowModalViewUser(true)
        setDataView(user)
    }

    const handleClickBtnDelete = (user) => {
        console.log(">>> Data delete: ", user)
        setShowModalDeleteUser(true)
        setDataDelete(user)
    }

    const resetData = () => {
        setDataUpdate({})
        setDataView({})
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
                    {/* <TableUser
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}
                    /> */}
                    <TableUserPaginate
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}
                        fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                        pageCount={pageCount}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                />
                <ModalViewUser
                    show={showModalViewUser}
                    setShow={setShowModalViewUser}

                    dataView={dataView}
                    fetchListUsers={fetchListUsers}
                    resetData={resetData}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}

                    dataUpdate={dataUpdate}
                    fetchListUsers={fetchListUsers}
                    resetData={resetData}
                />
                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}

                    dataDelete={dataDelete}
                    fetchListUsers={fetchListUsers}
                />
            </div>
        </div>
    )
}

export default ManageUser;