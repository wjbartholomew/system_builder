const availableComponents = (state = [], action) => {
    switch (action.type) {
        case 'SET_AVAILABLE_COMPONENTS':
            return action.payload;
        default:
            return state;
    }
};

// componentsReducer will be on the redux state at:
// state.componentsReducer
export default availableComponents;