import {
    Menu,
    MenuItem,
    ProSidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SubMenu,
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './SideBar.scss';

import { FaBuffer, FaGithub, FaCircle } from 'react-icons/fa';
import { GiWhaleTail } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { Link } from 'react-router-dom';
import sidebarBg from '../../assets/bg2.jpg';


const SideBar = (props) => {
    const { image, collapsed, rtl, toggled, handleToggleSidebar } = props
    return (
        <>
            <ProSidebar
                image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <GiWhaleTail size={'3em'} color='#31AFD4' />
                        <span style={{ marginLeft: '10px' }}>WEB's MENU</span>
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle" >
                        <MenuItem
                            icon={<MdDashboard />}
                        >
                            Dashboard
                            <Link to="/admin" />
                        </MenuItem>
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu
                            title="Features"
                            icon={<FaBuffer />}
                        >
                            <MenuItem>
                                Quản lý Users
                                <Link to="/admin/manage-user" />
                            </MenuItem>
                            <MenuItem>Quản lý Bài Quiz</MenuItem>
                            <MenuItem>Quản lý Câu Hỏi</MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href="https://github.com/hyynee04/React_Hook"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                React_Hook
                            </span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </>
    )
}

export default SideBar;