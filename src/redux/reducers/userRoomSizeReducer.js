const userRoomSize = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_ROOM_SIZE':
            return action.payload;
        default:
            return state;
    }
};

// componentsReducer will be on the redux state at:
// state.componentsReducer
export default userRoomSize;