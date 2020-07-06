const speakers = (state = [], action) => {
    switch (action.type) {
        case 'SET_SPEAKERS':
            return [...state, ...action.payload];
        case 'DELETE_SPEAKERS':
            const speakersIndex = action.payload
            return state.filter(speakers => speakers !== state[speakersIndex])
        default:
            return state;
    }
};

// componentsReducer will be on the redux state at:
// state.componentsReducer
export default speakers;