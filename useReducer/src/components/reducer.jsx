export const intialState = [];

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: state.length + 1,
          name: action.payload,
        },
      ];
    case "DELETE_TODO":
      return state.filter((each) => each.id !== action.payload);

    default:
      return state;
  }
}
