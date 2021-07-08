import React, { useReducer } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import {
  reducer,
  initialState,
  ADD_ITEM,
  TOGGLE_ITEM,
  CLEAR_COMPLETED
} from "./reducers/reducer";

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (e, item) => {
    dispatch({ type: ADD_ITEM, payload: item });
  };

  const toggleItem = itemId => {
    dispatch({ type: TOGGLE_ITEM, payload: itemId });
  };

  const clearCompleted = e => {
    dispatch({ type: CLEAR_COMPLETED });
  };

  return (

    <div className="App">
      <div className="header">
        <h1>Todoist</h1>
        <TodoForm addItem={addItem} />
      </div>
      <TodoList
        todo={state.todo}
        toggleItem={toggleItem}
        clearCompleted={clearCompleted}
      />
    </div>
  );
};

export default App;