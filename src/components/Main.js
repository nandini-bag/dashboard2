import React from 'react';
import Charts from './Charts';
import { IoFileTrayFull } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import { FaUsers,FaHeart } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";

const Main=({alignMenu})=>{
    return(
        <>
            <div className='main'>
                <div id='main-container' className={alignMenu ? 'align' : ''} >
                    <h4>dashboard / home</h4>
                    <div id='cards-container' >
                    {/* <div id='cards-container'> */}
                        <div className='card'>
                            <h2>analytics</h2>
                            <IoFileTrayFull className='icons'/>
                            <h2>300</h2>
                        </div>
                        <div className='card'>
                            <h2>category</h2>
                            <MdOutlineCategory className='icons'/>
                            <h2>400</h2>
                        </div>
                        <div className='card'>
                            <h2>customers</h2>
                            <FaUsers className='icons'/>
                            <h2>500</h2>
                        </div>
                    <div className='card'>
                            <h2>revenue</h2>
                            <TbReportAnalytics className='icons'/>
                            <h2>200</h2>
                        </div>
                        <div className='card'>
                            <h2>likes</h2>
                            <FaHeart className='icons'/>
                            <h2>500</h2>
                        </div>
                    </div>
                    <Charts/>
                </div>
            </div>    
        </>
    );
}
export default Main;