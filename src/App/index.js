import React from "react";
import { useTodos } from "./useTodos";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButtom } from "../CreateTodoButtom";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { TodoHeader } from "../TodoHeader";

function App(props) {
  const {
    error, 
    loading, 
    searchedTodos, 
    toggleTodo, 
    deleteTodo,
    totalTodos,
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo,
    openModal,
    setOpenModal,
  } = useTodos();

  return (
        <React.Fragment >

        <TodoHeader>
            <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        </TodoHeader>

        <TodoList>
          {error && <TodosError error= {error} /> }
          {loading && <TodosLoading /> }
          {(!loading && !searchedTodos.length) && <EmptyTodos />}

          {searchedTodos.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        {openModal ? 
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}/>
        </Modal>
        : undefined
        }
        
        <CreateTodoButtom 
        setOpenModal={setOpenModal}
        />
    </React.Fragment>
  );
}

export default App;
