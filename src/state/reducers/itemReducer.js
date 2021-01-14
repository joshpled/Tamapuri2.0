export default function itemReducer(
  state = { items: [], loading: false },
  action
) {
  switch (action.type) {
    case "GETTING_ITEMS":
      return {
        ...state,
        items: state.items,
        loading: true,
      };

    case "GET_ITEMS":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
