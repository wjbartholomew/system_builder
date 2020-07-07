const potentialMismatches = (state = '', action) => {
    switch (action.type) {
        case 'SET_POTENTIAL_MISMATCHES':
            return action.payload;
        default:
            return state;
    }
};

// componentsReducer will be on the redux state at:
// state.componentsReducer
export default potentialMismatches;