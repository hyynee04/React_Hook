import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import App from './App';
import Admin from './components/Admin/Admin';
import ManageUser from './components/Admin/Content/ManageUser';
import HomePage from './components/Home/HomePage';
import User from './components/User/User';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';
import DashBoard from './components/Admin/Content/DashBoard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<HomePage />} />
          <Route path='user' element={<User />} />
        </Route>

        <Route path='admin' element={<Admin />}>
          <Route index element={<DashBoard />} />
          <Route path='manage-user' element={<ManageUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
    {/* </React.StrictMode> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
