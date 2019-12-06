import React, { useState } from "react";

import "./GoalNew.css";

const GoalNew = props => {
  let [enteredText, setEnteredText] = useState("");

  const textChangeHandler = event => {
    setEnteredText(event.target.value);
  };

  const addGoalHandler = event => {
    event.preventDefault();
    const newGoal = {
      id: Math.random().toString(),
      text: enteredText
    };
    console.log("newGoal: ", newGoal.text);
    props.onAddGoal(newGoal);
    setEnteredText("");
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandler} />
      <input type="submit" value="Add goal" />
    </form>
  );
};

export default GoalNew;
