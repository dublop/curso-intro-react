import React, { createContext } from "react";
import { useLocalStorage } from'./useLocalStorage';

function useTodos() {
    const {item: todos, 
      saveItem: saveTodos, 
      sincronizeItem: sincronizeTodos, 
      loading, 
      error} = useLocalStorage('CURSONOTES_V1', []);
    // El estado de nuestra búsqueda
    const [searchValue, setSearchValue] = React.useState('');
    //
    const [openModal, setOpenModal] = React.useState(false);
    // Cantidad de TODOs completados
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    // Cantidad total de TODOs
    const totalTodos = todos.length;
    // Creamos una nueva variable en donde guardaremos las coincidencias con la búsqueda
    let searchedTodos = [];
  
    // Lógica para filtrar
    if(!searchValue.length >= 1) {
      searchedTodos = todos;
    }else {
      searchedTodos = todos.filter(todo =>{
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
  
        return todoText.includes(searchText);
      });
  
    }
  
    const addTodo = (text) => {
      const newTodos = [...todos];

      newTodos.push({
        text: text,
        completed: false,
      });
  
      saveTodos(newTodos);
    };
  
    const toggleTodo = (text) => {
      const todoIndex = todos.findIndex(todo => (todo.text === text));
      const newTodos = [...todos];
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
  
      saveTodos(newTodos);
    };
  
    const deleteTodo = (text) => {
      const todoIndex = todos.findIndex(todo => (todo.text === text));
      const newTodos = [...todos];
      newTodos.splice(todoIndex, 1);
  
      saveTodos(newTodos);
    };

    return{
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      toggleTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      sincronizeTodos,
    };
}

export { useTodos };