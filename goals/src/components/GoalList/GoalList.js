import React from "react";
import "./GoalList.css";

const GoalList = props => {
  const renderGoals = props.goals.map(goal => {
    return <li key={goal.id}>{goal.text}</li>;
  });

  return (
    <div className="goals">
      <ul>{renderGoals}</ul>
    </div>
  );
};

export default GoalList;
