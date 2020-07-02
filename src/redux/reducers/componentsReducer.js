const components = (state = [], action) => {
    switch (action.type) {
        case 'SET_SOURCES':
            return action.payload;
        default:
            return state;
    }
};

// componentsReducer will be on the redux state at:
// state.componentsReducer
export default components;