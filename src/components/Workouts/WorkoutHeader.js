import React from 'react';

const cleanTitle = (text) => {
    return text.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, '');
}

const WorkoutHeader = ({exercises}) => {
    const exe = exercises[0];
    return (
        <nav className="workout-nav d-flex align-items-center bg-white">
            <div className="d-flex flex-column justify-content-center">
                <p className="subtitle"><small>{exe.dayTitle.substring(0,6).trim()}</small></p>
                <h1 className="title">{cleanTitle(exe.dayTitle.substring(7).trim())}</h1>
            </div>
            <span className="ml-auto info-icon">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24"
                    data-toggle="modal" 
                    data-target="#info-modal">
                    <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
            </span>
        </nav>
    );
};

export default WorkoutHeader;