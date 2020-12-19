export default function petReducer(state = { pet: {}, loading: false }, action){
    switch (action.type) {
      case "CREATING_PET":
        return {
          ...state,
          pet: state.pet,
          loading: true,
        };
      case "CREATE_PET":
        return {
          ...state,
          pet: action.payload,
          loading: false,
        };
  
      case "CHANGING_ATTRIBUTE":
        return {
          ...state,
          pet: state.pet,
          loading: true,
        };
  
      case "CHANGE_ATTRIBUTE":
        return {
          pet: action.payload,
          loading: false,
        };
  
      default:
        return state;
    }
  }