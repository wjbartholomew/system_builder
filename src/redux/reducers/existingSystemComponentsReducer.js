const existingSystemComponents = (state = [], action) => {
    switch (action.type) {
        case 'SET_EXISTING_SYSTEM_COMPONENTS':
            return action.payload;
        default:
            return state;
    }
};

// componentsReducer will be on the redux state at:
// state.componentsReducer
export default existingSystemComponents;