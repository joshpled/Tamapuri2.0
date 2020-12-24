const initialState = {
loggedInState: "NOT_LOGGED_IN",
user: {}
}

export default (state = initialState, action) => {
    switch (action.type) {

    case 'GET_USER':
        return { ...state, ...action.payload }

    default:
        return state
    }
}
