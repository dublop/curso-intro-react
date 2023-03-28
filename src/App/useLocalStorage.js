import React from "react";

function useLocalStorage(itemName, initialValue) {
    // estado de
    const [sincronizedItem, setSincronizedItem] = React.useState(true);
    // estado del error
    const [error, setError] = React.useState(false);
    // estado del loading
    const [loading, setLoading] = React.useState(true);
    // Estado inicial de nuestros TODOs
    const [item, setItem] = React.useState(initialValue); 
  
    React.useEffect(() => {
      setTimeout(() => {
        try{
            // creando la variable de todos que va a tener lo que esta en Local Storage
          let parsedItem;
          //  se obtienene los todos del Local Storage
          const localStorageItem = localStorage.getItem(itemName);
          // si no existe el archivo de local storage crea uno vacio
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          }else {
            // si existe guarda los todos en localTodos a un formato objeto de js
            parsedItem = JSON.parse(localStorage.getItem(itemName));
          }
  
          setItem(parsedItem);
          setLoading(false);
          setSincronizedItem(true);
        }catch(error) {
          // ctualizar estado de error
          setError(error);
        }
      }, 1000);
    }, [sincronizedItem]);

    const sincronizeItem = () => {
      setLoading(true);
      setSincronizedItem(false);
    };
   
    const saveItem = (newItem) => {
      try{
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
      }catch(error){
        setError(error);
      }
    }
  
    return {
      item,
      saveItem,
      loading,
      error,
      sincronizeItem,
    };
}

export { useLocalStorage };