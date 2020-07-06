const accessories = (state = [], action) => {
    switch (action.type) {
        case 'SET_ACCESSORIES':
            return [...state, ...action.payload];
        case 'DELETE_ACCESSORIES':
            const accessoriesIndex = action.payload
            return state.filter(accessories => accessories !== state[accessoriesIndex])
        default:
            return state;
    }
};

// componentsReducer will be on the redux state at:
// state.componentsReducer
export default accessories;