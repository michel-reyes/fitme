import React from 'react';
import './navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav justify-content-around align-items-center fixed-bottom bg-white" id="app-footer-nav">
            <li className="nav-item">
                <NavLink exact to="/" className="nav-link d-flex flex-column justify-content-center align-items-center">
                    <svg style={{width:"24px",height:"24px"}} viewBox="0 0 24 24">
                        <path fill="#000000" d="M12,5.32L18,8.69V15.31L12,18.68V5.32M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5,8.09V15.91L12,19.85L19,15.91V8.09L12,4.15Z" />
                    </svg>
                    <span className="nav-title">Workouts</span>
                </NavLink> 
            </li>
            <li className="nav-item">
                <NavLink to="/workouts" className="nav-link d-flex flex-column justify-content-center align-items-center">
                    <svg style={{width:"24px",height:"24px"}} viewBox="0 0 24 24">
                        <path fill="#000000" d="M14.12,10H19V8.2H15.38L13.38,4.87C13.08,4.37 12.54,4.03 11.92,4.03C11.74,4.03 11.58,4.06 11.42,4.11L6,5.8V11H7.8V7.33L9.91,6.67L6,22H7.8L10.67,13.89L13,17V22H14.8V15.59L12.31,11.05L13.04,8.18M14,3.8C15,3.8 15.8,3 15.8,2C15.8,1 15,0.2 14,0.2C13,0.2 12.2,1 12.2,2C12.2,3 13,3.8 14,3.8Z" />
                    </svg>
                    <span className="nav-title">Exercises</span>
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/nutrition" className="nav-link d-flex flex-column justify-content-center align-items-center">
                    <svg style={{width:"24px",height:"24px"}} viewBox="0 0 24 24">
                        <path fill="#000000" d="M11,12H8.82C9.62,12.5 10.35,13.07 11,13.68V12M7,11C7.27,5.88 9.37,2 12,2C14.66,2 16.77,5.94 17,11.12C18.5,10.43 20.17,10 22,10C16.25,12.57 18.25,22 12,22C6,22 7.93,12.57 2,10C3.82,10 5.5,10.4 7,11M11,11V9H8.24L8.03,11H11M11,8V6H9.05C8.8,6.6 8.6,7.27 8.43,8H11M11,5V3.3C10.45,3.63 9.95,4.22 9.5,5H11M12,3V5H13V6H12V8H14V9H12V11H15V12H12V14H14V15H12.23C13.42,16.45 14.15,18 14.32,19.23C15.31,17.56 15.96,14.84 16,11.76C15.94,7 14.13,3 12,3Z" />
                    </svg>
                    <span className="nav-title">Nutrition</span>
                </NavLink>
            </li>
        </nav>
    )
}

export default Navbar;