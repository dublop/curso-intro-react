import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState("");

    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    };
    const onCancel = (e) => {
        setOpenModal(false);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe un nuevo TODO</label>
            <textarea value={newTodoValue} onChange={onChange} placeholder="Cortar la cebolla"/>
            <div className="TodoForm-buttonContainer">
                <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button-cancel">Cancelar</button>
                <button type="submit" className="TodoForm-button TodoForm-button-add">Anadir</button>
            </div>
        </form>
    );
}

export { TodoForm };