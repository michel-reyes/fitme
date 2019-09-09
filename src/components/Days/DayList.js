import React from 'react';
import { Link } from 'react-router-dom';
import './Day.scss';

const cleanTitle = (text) => {
    return text.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, '');
}

const DayList = ({days, completedDay}) => {
    console.log(completedDay);
    return days.map(day => {
        return (
            <Link 
                to={'/workouts/' + day.dayOrderId} 
                key={day.dayID} 
                className="d-flex justify-content-between align-items-center px-3" 
                id="day-item">
                <div className="day-title">
                    <small>{day.dayTitle.substring(0,6).trim()}</small>
                    <h1>{cleanTitle(day.dayTitle.substring(7).trim())}</h1>
                </div>
                <div className="day-status">
                    {
                        (parseInt(completedDay) >= parseInt(day.dayOrderId)) ? 
                        (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#1a73e8" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/></svg>
                        ) :
                        ('')
                    }
                </div>
            </Link>
        );
    });
};

export default DayList;