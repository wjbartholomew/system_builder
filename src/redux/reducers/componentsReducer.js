const components = (state = [], action) => {
    switch (action.type) {
        case 'SET_AVAILABLE_SOURCES':
            return action.payload;
        case 'SET_AVAILABLE_AMPLIFICATION':
            return action.payload;
        case 'SET_AVAILABLE_SPEAKERS':
            return action.payload;
        case 'SET_AVAILABLE_CABLES':
            return action.payload;
        case 'SET_AVAILABLE_ACCESSORIES':
            return action.payload;
        default:
            return state;
    }
};

// componentsReducer will be on the redux state at:
// state.componentsReducer
export default components;