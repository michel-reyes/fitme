import React, { Component } from 'react';
import alasql from 'alasql';
import { WORKOUT_TABLE } from '../../database/workout';
import { DAY_TABLE } from '../../database/day';
import './Workout.scss';
import WorkoutHeader from './WorkoutHeader';
import ExerciseList from './ExerciseList';

class Workout extends Component {
    state = {}

    // Mark day as completed
    markCompleted = (id) => {
        const completedDay = parseInt(localStorage.getItem('completedDay') || 0);
        if (id > completedDay) {
            localStorage.setItem('completedDay', id);
        }
    }

    /**
     * Get workout by day id
     * @param {integer} id
     */
    getWorkoutByDayID(id) {
        const query = alasql(`
            SELECT *
            FROM ? AS workout
            JOIN ? AS day
                ON workout.fk_dayID = day.dayOrderId
            WHERE workout.fk_dayID = ${id}
        `, [WORKOUT_TABLE, DAY_TABLE]);

        return query;
    }
    
    render() {
        const dayID = this.props.match.params.id;
        const workout = this.getWorkoutByDayID(dayID);
        const completedDay = localStorage.getItem('completedDay') || 0;
        return (
            <>
                <WorkoutHeader exercises={workout} />
                <ExerciseList exercises={workout} completedDay={completedDay} markCompleted={this.markCompleted} />
            </>
        )
    }
}

export default Workout;
