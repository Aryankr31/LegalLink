import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Navbar.scss"
const Navbar = () => {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const { pathname } = useLocation()

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", isActive);
        return () => {
            window.removeEventListener("scroll", isActive)
        };
    }, []);

    var currentUser = {
        id: 1,
        username: "A.R Reddy",
        isSeller: true
    }





    return (
        <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <Link to="/" className='link'>
                        <span className='text'>legalLink</span>
                    </Link>
                    <span className='dot'>.</span>
                </div>
                <div className="links">
                    <span>About</span>
                    <span>Explore</span>
                    <span>English</span>
                    {!currentUser?.isSeller && <span id='sign_In'>Sign in</span>}
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser?.isSeller && <button>Join</button>}
                    {currentUser && (
                        <div className="user" onClick={() => setOpen(!open)}>
                            <img src="./img/man3.jpeg" alt="" />
                            <span>{currentUser?.username}</span>
                            {open && <div className="options">
                                {currentUser?.isSeller && (
                                    <>
                                        <Link className='link' to="/myGigs">My Services</Link>
                                        <Link className='link' to="/add">Add New Gig</Link>
                                    </>
                                )}
                                <Link className='link' to="/orders">Orders</Link>
                                <Link className='link' to="/messages">Messages</Link>
                                <Link className='link' to="/" id='logoutBtn'>Logout</Link>
                            </div>}
                        </div>
                    )}
                </div>
            </div>
            {(active || pathname !== "/") && (
                <>
                    <hr />
                    <div className="menu">
                        <Link className="link menuLink" to="/">
                            Advocates
                        </Link>
                        <Link className="link menuLink" to="/">
                            Notaries
                        </Link>
                        <Link className="link menuLink" to="/">
                            Writing & Translation
                        </Link>
                        <Link className="link menuLink" to="/">
                            Arbitrators
                        </Link>
                        <Link className="link menuLink" to="/">
                            Document Writes
                        </Link>
                        <Link className="link menuLink" to="/">
                            Mediators
                        </Link>
                        <Link className="link menuLink" to="/">
                            Legal Secratary
                        </Link>
                        <Link className="link menuLink" to="/">
                            Public Defender
                        </Link>
                        <Link className="link menuLink" to="/">
                            Para Legal
                        </Link>
                    </div>
                </>
            )}
        </div>
    )
}

export default Navbar