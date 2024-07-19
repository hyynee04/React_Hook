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

import { FaBuffer, FaDiceFour, FaGithub } from 'react-icons/fa';
import { MdDashboard } from "react-icons/md";
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
                        <FaDiceFour size={'3em'} color='#31AFD4'/>
                        <span style={{marginLeft: '10px'}}>WEB's MENU</span>
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<MdDashboard />}
                        >
                            Dashboard
                        </MenuItem>
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu
                            title="Features"
                            icon={<FaBuffer />}
                        >
                            <MenuItem>Quản lý Users</MenuItem>
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