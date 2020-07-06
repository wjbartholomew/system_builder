const cables = (state = [], action) => {
    switch (action.type) {
        case 'SET_CABLES':
            return [...state, ...action.payload];
        case 'DELETE_CABLES':
            const cablesIndex = action.payload
            return state.filter(cables => cables !== state[cablesIndex])
        default:
            return state;
    }
};

// componentsReducer will be on the redux state at:
// state.componentsReducer
export default cables;