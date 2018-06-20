import React from "react";

const TaskItem = ({ item }) => (
  <div className="taskitem" data-id={`${item.id}`}>
    <p>ID:{item.id}</p>
    <p>Owner:{item.owner}</p>
    <p>Status:{item.status}</p>
    <p>Description:{item.description}</p>
    <p>due_date:{item.due_date}</p>
  </div>
);

export default TaskItem;
