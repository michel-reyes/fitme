import React, { Component } from 'react';
import alasql from 'alasql';
import { DAY_TABLE } from '../../database/day';
import WorkoutDayList from './DayList';

class WorkoutDay extends Component {
    state = {}

    /**
     * Get day
     * 
     * dayID: "b7038676828d79c169da98425c2709f0"
     * dayIsCompleted: false
     * dayOrderId: 1
     * dayTitle: "Day 1 - Ab Straight Sets"
     */
    getDays() {
        const query = alasql(`
            SELECT * 
            FROM ?
            ORDER BY dayOrderId ASC`, 
            [DAY_TABLE]);

        return query;
    }

    render() {
        // get list of days
        const days = this.getDays();
        const completedDay = localStorage.getItem('completedDay') || 0;
        return (
            <WorkoutDayList days={days} completedDay={completedDay} />
        )
    }
}

export default WorkoutDay;
