const existingSystems = (state = [], action) => {
    switch (action.type) {
        case 'SET_EXISTING_SYSTEMS':
            return action.payload;
        default:
            return state;
    }
};

// componentsReducer will be on the redux state at:
// state.componentsReducer
export default existingSystems;