const initialState = [
  {
    title: 'ToDo1',
    completed: false,
  },
  {
    title: 'ToDo2',
    completed: false,
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return Object.assign([], state).concat(action.data);
    }
    default: return state;
  }
};
