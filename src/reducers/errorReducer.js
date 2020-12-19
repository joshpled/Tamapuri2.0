export default function errorReducer(state = { error: {} }, action) {
    
    switch (action.type) {
      case "READ_ERROR":
        return {
          ...state,
          error: action.payload
        };
    
      default:
        return state;
    }
  }