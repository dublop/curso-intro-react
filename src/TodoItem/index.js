import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai"
import { AiOutlineDelete } from "react-icons/ai"
import './TodoItem.css';

function TodoItem(props) {

    return (
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
                <AiOutlineCheckCircle />
            </span>
            <p  className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >
                <AiOutlineDelete />
            </span>
        </li>
    );
}

export { TodoItem };