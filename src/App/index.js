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
import { ChangeAlertWithStorageListener } from "../ChangeAlert";

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
    sincronizeTodos,
  } = useTodos();

  return (
        <React.Fragment >

        <TodoHeader loading={loading}>
            <TodoCounter 
              totalTodos={totalTodos} 
              completedTodos={completedTodos} 
            />
            <TodoSearch 
              searchValue={searchValue} 
              setSearchValue={setSearchValue} 
            />
        </TodoHeader>

        <TodoList 
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          totalTodos={totalTodos}
          searchText={searchValue}
          onError={() => <TodosError />}
          onLoading={() => <TodosLoading />}
          onEmptyTodos={() => <EmptyTodos />}
          onEmptySearchResults={(searchText) => <p>No hay resultados para "{searchText}".</p>}
          /*render={todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={() => toggleTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )}*/
        
        >
          {todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={() => toggleTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )}
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

        <ChangeAlertWithStorageListener 
        sincronize={sincronizeTodos}
        />
    </React.Fragment>
  );
}

export default App;
