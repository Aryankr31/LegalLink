import React from 'react'
import "./Featured.scss"
function Featured() {
  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h1>Find the best <i>legal professional </i> for your case</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="./img/search.png" alt="" />
                        <input type="text" placeholder='Try "Affidavit"' />
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Frequently Searched</span>
                    <button>Wills</button>
                    <button>Affidavits</button>
                    <button>Property Disputes</button>
                    <button>Immigration</button>
                </div>
            </div>
            <div className="right">
                <img src="./img/lawyerHero.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Featured