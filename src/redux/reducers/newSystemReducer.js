const newSystem = (state = {}, action) => {
    switch (action.type) {
        case 'SET_NEW_SYSTEM':
            return action.payload;
        default:
            return state;
    }
};

// componentsReducer will be on the redux state at:
// state.componentsReducer
export default newSystem;