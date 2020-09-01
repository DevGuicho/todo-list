const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'ADD_TABLE':
      return {
        ...state,
        tables: [...state.tables, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
