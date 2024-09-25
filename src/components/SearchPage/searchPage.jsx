import React from 'react'
import './searchPage.css'
import { VscSearch } from "react-icons/vsc";

const searchPage = () => {
  return (
    <div className='searchPageContainer'>
        <div className="searchPageInnerContainer">
            <h5 className='searchHeader'>Search in WordPress.org</h5>
            <form className="searchContainer">
                <input className='searchInput' placeholder='Type to Search...' type="text" />
                <button className='searchBtn'><VscSearch /></button>
            </form>
        </div>
    </div>
  )
}

export default searchPage