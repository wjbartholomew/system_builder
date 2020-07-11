const systemToView = (state = [], action) => {
    switch (action.type) {
        case 'SET_SYSTEM_TO_VIEW':
            return action.payload;
        default:
            return state;
    }
};

// componentsReducer will be on the redux state at:
// state.componentsReducer
export default systemToView;