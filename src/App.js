import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Workout from './components/Workouts/Workout';
import WorkoutDays from './components/Days/Day';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/workouts" component={WorkoutDays} />
          <Route path="/workouts/:id" component={Workout} />
        </Switch>
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
