const systemPrice = (state = 0, action) => {
    switch (action.type) {
        case 'SET_SYSTEM_PRICE':
            return action.payload;
        default:
            return state;
    }
};

// componentsReducer will be on the redux state at:
// state.componentsReducer
export default systemPrice;