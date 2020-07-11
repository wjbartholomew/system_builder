const systemComponents = (state = [], action) => {
    switch (action.type) {
        case 'SET_SYSTEM_COMPONENTS':
            return [...state, ...action.payload];
        case 'DELETE_COMPONENT':
            const componentIndex = action.payload
            return state.filter(components => components !== state[componentIndex])
        case 'RESET_SYSTEM_COMPONENTS':
            return []
        default:
            return state;
    }
};

// componentsReducer will be on the redux state at:
// state.componentsReducer
export default systemComponents;