import React from "react";
import './TaskItem.css';

const TaskItem = ({ name, priority }) => {
    return (
        <li className={`task-item ${priority.toLowerCase()}`}>
            <span className="task-name">{name}</span>
            <span className="task-priority">{priority}</span>
        </li>
    )
}

export default TaskItem;