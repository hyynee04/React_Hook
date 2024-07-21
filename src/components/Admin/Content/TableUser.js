import { useEffect, useState } from "react";
import { getAllUsers } from '../../../services/apiService';
import './TableUser.scss'

const TableUser = (props) => {
    const [listUsers, setListUsers] = useState([])

    useEffect(() => {
        fetchListUsers()
    }, []);

const fetchListUsers = async() => {
    let res = await getAllUsers()
    if(res.EC === 0) {
        setListUsers(res.DT)
    }
}

    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <tr key={`table-user-${index}`}>
                                    <td>{index + 1}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button className="btn">View</button>
                                        <button className="btn mx-3">Update</button>
                                        <button className="btn btn-delete">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {listUsers && listUsers.length === 0 &&
                        <tr>
                            <td colSpan={'4'}>Not found data</td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    )
}

export default TableUser;