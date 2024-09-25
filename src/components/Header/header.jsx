import React from 'react'
import './header.css'
import { FaWordpress } from "react-icons/fa";
import { VscSearch } from "react-icons/vsc";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import SideBar from '../Sidebar/sideBar';
import SearchPage from '../SearchPage/searchPage';

const header = ({open, setOpen, searchOpen, setSearchOpen}) => {

    const handleMenuClick = () => {
        setOpen(true)
        if(searchOpen) {
            setSearchOpen(false)
        }
    }

    const handleCloseClick = () => {
        setOpen(false)
    }

    const handleSearchOpen = () => {
        setSearchOpen(true)
        if(open) {
            setOpen(false)
        }
    }

    const handleSearchCloseClick = () => {
        setSearchOpen(false)
    }

  return (
    <div className='headerContainer'>
        <div className="headerInnerContainer">
            <div className="rightHeaderContainer">
                <div className="headerLogoContainer">
                    <FaWordpress className='headerLogo' />
                </div>

                <ul className='headerNavListContainer'>
                    <li className='headerNavList'>news</li>
                    <li className='headerNavList'>showcase</li>
                    <li className='headerNavList'>hosting</li>
                    <li className='headerNavList'>extend<FaAngleDown /></li>
                    <li className='headerNavList'>learn<FaAngleDown /></li>
                    <li className='headerNavList'>community<FaAngleDown /></li>
                    <li className='headerNavList'>about<FaAngleDown /></li>
                </ul>
            </div>
            
            <div className="leftHeaderContainer">
                {!searchOpen ? (<div onClick={handleSearchOpen} className="headerSearchContainer">
                    <VscSearch className='headerSearch' />
                </div>)
                :
                (<div onClick={handleSearchCloseClick} className="headerMenuContainer">
                    <IoMdClose className='headerMenu' />
                </div>)}

                {!open ? (<div onClick={handleMenuClick} className="headerMenuContainer">
                    <HiOutlineMenuAlt4 className='headerMenu' />
                </div>)
                :
                (<div onClick={handleCloseClick} className="headerMenuContainer">
                    <IoMdClose className='headerMenu' />
                </div>)}
                <button className='headerMenuBtn'>get wordPress</button>
            </div>
        </div>
        {searchOpen && (<div className="searchPageMainContainer">
            <SearchPage />
        </div>)}
        {open && (<div className="sideBarMainContainer">
            <SideBar />
        </div>)}
    </div>
  )
}

export default header