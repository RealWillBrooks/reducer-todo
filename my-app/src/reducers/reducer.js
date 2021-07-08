export const ADD_ITEM = "ADD_ITEM";
export const TOGGLE_ITEM = "TOGGLE_ITEM";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const initialState = {

  todo: [
    {
      name: "Work on Cardio",
      id: 12,
      completed: false
    },
    {
      name: "Make morning smoothie",
      id: 123,
      completed: false
    },
    {
      name: "Prepare for 8am meeting",
      id: 1234,
      completed: false
    }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      console.log(action.payload.item);
      const newItem = {
        name: action.payload.item,
        id: Date.now(),
        completed: false
      };
      return {
        ...state,
        todo: [...state.todo, newItem]
      };
    case TOGGLE_ITEM:
      return {
        ...state,
        todo: state.todo.map(item => {
          if (action.payload === item.id) {
            return {
              ...item,
              completed: !item.completed
            };
          }
          return item;
        })
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todo: state.todo.filter(item => !item.completed)
      };
    default:
      return state;
  }
};