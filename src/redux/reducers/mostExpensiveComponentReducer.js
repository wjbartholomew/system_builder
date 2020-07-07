const expensiveComponent = (state = 0, action) => {
    switch (action.type) {
        case 'SET_MOST_EXPENSIVE_COMPONENT':
            return action.payload;
        default:
            return state;
    }
};

// componentsReducer will be on the redux state at:
// state.componentsReducer
export default expensiveComponent;