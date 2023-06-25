import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'


export default function Header() {
    return (
        <>
            <div className='navbar'>
            <span class="icon icon--size_md"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZaYYWpdVOlxcO_-fywQ6WBTIFLuXCbQGf4A&usqp=CAU' alt=''/></span>
            <nav className='main-nav' role='navigation'>
                <ul className='nav-primary'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Finances</a></li>
                    <li><a href='#'>Send and Request</a></li>
                    <li><a href='#'>Deals</a></li>
                    <li><a href='#'>Wallet</a></li>
                    <li><a href='#' className="main">Activity</a></li>
                    <li><a href='#'>Help</a></li>
                </ul>
                <ul className='nav-secondary'>
                    <li><a href='#'><FontAwesomeIcon icon={faBell} style={{color: "#d1f1ff",}} /></a></li>
                    <li><a href='#'><FontAwesomeIcon icon={faGear} style={{color: "#d1f1ff",}} /></a></li>
                    <li><button>LOG OUT</button></li>
                    

                </ul>
            </nav>
            </div>
        </>
    )
}
