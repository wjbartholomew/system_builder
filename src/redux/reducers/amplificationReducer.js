const amplification = (state = [], action) => {
    switch (action.type) {
        case 'SET_AMPLIFICATION':
            return [...state, ...action.payload];
        case 'DELETE_AMPLIFICATION':
            const amplificationIndex = action.payload
            return state.filter(amplification => amplification !== state[amplificationIndex])
        default:
            return state;
    }
};

// componentsReducer will be on the redux state at:
// state.componentsReducer
export default amplification;