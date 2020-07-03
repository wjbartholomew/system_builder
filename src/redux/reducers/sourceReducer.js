
const source = (state=[], action) => {
    switch (action.type) {
        case 'SET_SOURCE':
            return [...state, ...action.payload];
        case 'DELETE_SOURCE':
            const sourceIndex = action.payload
            return state.filter(source => source !== state[sourceIndex])
        default:
            return state;
    }
};

// componentsReducer will be on the redux state at:
// state.componentsReducer
export default source;