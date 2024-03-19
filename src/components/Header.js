import React from 'react'; 
import { PiGitlabLogoFill } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUserCircle } from "react-icons/fa";

import SearchIcon from '@mui/icons-material/Search';
import { MdOutlineDashboardCustomize, MdNotificationsNone } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import { LuFileBarChart2 } from "react-icons/lu";
import { TbFileAnalytics } from "react-icons/tb";
import { FiHeart } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { BsToggle2On } from "react-icons/bs";

const Header=({toggleMenu, showMennubar})=>{
    return(
        <>
            <div className='items header'>
                <div className='logo-container'>
                    <PiGitlabLogoFill className='logo-icon'/>
                    <span className='logo-name'>Logo</span>
                </div>
                <div className='header-icons'>
                    <RxHamburgerMenu className='icons' onClick={toggleMenu}/>
                    <FaRegUserCircle className='icons'/>
                </div>
            </div>
               {/* ============= menubox ==================== */}

            <div id='sidebar' className={showMennubar ? 'hide-show' : ''}>
            <div className='sidebar-content'>
                <div className='search-box'>
                    <ul>
                        <li>
                            <a href='#'>
                                <SearchIcon fontSize='large' className='search-icon icons'/>
                                <input type='text' className='input-box' maxLength='12'/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='menu-list'>
                    <ul>
                        <li>
                            <a href='#'>
                                <MdOutlineDashboardCustomize className='icons'/>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <MdOutlineCategory className='icons'/>
                                <span>Category</span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <HiMiniUserGroup className='icons'/>
                                <span>Customers</span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <LuFileBarChart2 className='icons'/>
                                <span>Revenue</span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <MdNotificationsNone className='icons'/>
                                <span>Notification</span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <TbFileAnalytics className='icons'/>
                                <span>Analytics</span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <FiHeart className='icons'/>
                                <span>likes</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='bottom-content'>
                    <ul>
                        <li>
                            <a href='#'>
                               <BiLogOut className='icons'/>
                               <span>Login</span>
                            </a>
                        </li>
                        <li>
                            <a href='' className='bottom-icons'>
                               <BsToggle2On className='icons open-icon'/>
                               <span>Toggle</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>          
            </div>
        </>
    );
}
export default Header;