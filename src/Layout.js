import {
    Route,
    Routes
} from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import Admin from './components/Admin/Admin';
import ManageUser from './components/Admin/Content/ManageUser';
import HomePage from './components/Home/HomePage';
import User from './components/User/User';
import DashBoard from './components/Admin/Content/DashBoard';
import Login from './components/Auth/Login';

const Layout = (props) => {
    return (
        <>
            <Routes>
                <Route path='/' element={<App />} >
                    <Route index element={<HomePage />} />
                    <Route path='user' element={<User />} />
                </Route>

                <Route path='admin' element={<Admin />}>
                    <Route index element={<DashBoard />} />
                    <Route path='manage-user' element={<ManageUser />} />
                </Route>

                <Route path='/login' element={<Login />} />
            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    )

}

export default Layout;