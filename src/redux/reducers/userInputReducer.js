const userInput = (state = 1, action) => {
    switch (action.type) {
        case 'SET_USER_INPUT':
            return 2;
        default:
            return state;
    }
};

// componentsReducer will be on the redux state at:
// state.componentsReducer
export default userInput;