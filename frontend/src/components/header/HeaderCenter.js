import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const HomeCenter = () => {
    return (
        <>
          <div className="header__center">
              <AiOutlineSearch className="header__center--search-icon" />
             
                <input
                    className="header__center--search-input"
                    placeholder="Search"
                />
              
          </div> 
        </>
    )
}

export default HomeCenter
