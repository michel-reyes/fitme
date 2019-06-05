import React from 'react';

const cleanTitle = (text) => {
    return text.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, '');
}

const WorkoutHeader = ({exercises}) => {
    const exe = exercises[0];
    return (
        <nav className="workout-nav d-flex flex-column justify-content-center bg-white">
            <p className="subtitle"><small>{exe.dayTitle.substring(0,6).trim()}</small></p>
            <h1 className="title">{cleanTitle(exe.dayTitle.substring(7).trim())}</h1>
        </nav>
    );
};

export default WorkoutHeader;