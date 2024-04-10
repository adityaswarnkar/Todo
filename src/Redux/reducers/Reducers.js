const initalState = {
  todos: [],
  index: null,
};

const Reducers = (state = initalState, action) => {
  switch (action.type) {
    case 'ADD_INDEX':
      return {
        ...state,
        index: action.payload,
      };

    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index !== action.payload),
      };

    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.index ? action.payload.todo : todo,
        ),
      };

    default:
      return state;
  }
};

export default Reducers;
