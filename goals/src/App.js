import React, { useState } from "react";
import GoalList from "./components/GoalList/GoalList";
import GoalNew from "./components/GoalNew/GoalNew";
import "./App.css";

const App = () => {
  const [goals, setGoals] = useState([
    { id: "g1", text: "Get to 30% on MERN course" },
    { id: "g2", text: "Start matrix for Layerframe" },
    { id: "g3", text: "Clean up the barn" },
    { id: "g4", text: "Move keyboard rig to barn" }
  ]);

  const addNewGoalHandler = newGoal => {
    // setGoals(goals.concat(newGoal));

    // setGoals(prevGoals => {
    //   return prevGoals.concat(newGoal);
    // });

    setGoals(prevGoals => prevGoals.concat(newGoal));
  };

  return (
    <div className="App">
      <h1 className="App-header">Goals for today</h1>
      <GoalNew onAddGoal={addNewGoalHandler} />
      <GoalList goals={goals} />
    </div>
  );
};

export default App;
