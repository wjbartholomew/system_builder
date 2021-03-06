const newSystem = (state = {
    newSystem: {
        name: '',
        description: '',
        recommendations: '',
        userListeningHabits: '',
        appropriateRoomSize: '',
        userRoomSize: '',
        userId: '',
        uniqueSystemId: ''
    }
        }, action) => {
    switch (action.type) {
        case 'SET_NEW_SYSTEM':
            return action.payload;
        case 'SET_POTENTIAL_MISMATCHES':
            return {newSystem: {...state.newSystem, potentialMismatches: action.payload}}
        case 'SET_USER_LISTENING_HABITS':
            return {newSystem: {...state.newSystem, userListeningHabits: action.payload}}
        case 'SET_APPROPRIATE_ROOM_SIZE':
            return {newSystem: {...state.newSystem, appropriateRoomSize: action.payload}}
        case 'SET_USER_ID':
            return { newSystem: { ...state.newSystem, userId: action.payload } }
        case 'RESET_NEW_SYSTEM':
            return {
                newSystem: {
                    name: '',
                    description: '',
                    recommendations: '',
                    userListeningHabits: '',
                    appropriateRoomSize: '',
                    userRoomSize: '',
                    userId: '',
                    uniqueSystemId: ''
                }
            }
        default:
            return state;
    }
};


export default newSystem;