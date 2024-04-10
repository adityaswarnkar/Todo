export const addIndex = (todo) => ({
    type: 'ADD_INDEX',
    payload: todo
})

export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    payload: todo
})

export const deleteTodo = (index) => ({
    type: 'DELETE_TODO',
    payload: index
  });

  export const updateTodo = (index, todo) => ({
    type: 'UPDATE_TODO',
    payload: { index, todo }
  });