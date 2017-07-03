//flux state : desc & data

const addTodo = (title, completed) => ({
  type: 'ADD_TODO',
  data: {
    title,
    completed,
  },
});

const deleteTodo = title => ({
  type: 'DELETE_TODO',
  data: {
    title,
  },
});

const completeTodo = title => ({
  type: 'COMPLETE_TODO',
  data: {
    title,
    completed: true,
  },
});

export {
  addTodo,
  deleteTodo,
  completeTodo,
};
