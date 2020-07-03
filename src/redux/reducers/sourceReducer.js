const source = (state = [], action) => {
    switch (action.type) {
        case 'SET_SOURCE':
            return action.payload;
        default:
            return state;
    }
};

// componentsReducer will be on the redux state at:
// state.componentsReducer
export default source;