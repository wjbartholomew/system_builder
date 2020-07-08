const newSystem = (state = {
    newSystem: {
        name: '',
        description: '',
        recommendations: '',
    },
    dimensions: {
        height: 1,
        width: 1,
        length: 1
        },
    systemAttributes: {
        volume: '',
        roomSize: '',
        idealOutput: '',
        outputValue: 0
        }}, action) => {
    switch (action.type) {
        case 'SET_NEW_SYSTEM':
            return action.payload;
        case 'SET_POTENTIAL_MISMATCHES':
            return {newSystem: {...state.newSystem, potentialMismatches: action.payload}}
        case 'SET_USER_LISTENING_HABITS':
            return {newSystem: {...state.newSystem, userListeningHabits: action.payload}}
        case 'SET_APPROPRIATE_ROOM_SIZE':
            return {newSystem: {...state.newSystem, appropriateRoomSize: action.payload}}
        case 'SET_MOST_EXPENSIVE_COMPONENT':
            return {newSystem: {...state.newSystem, mostExpensiveComponent: action.payload}}
        case 'SET_SOURCE_TYPE':
            return {newSystem: {...state.newSystem, sourceType: action.payload}}
        case 'SET_SYSTEM_PRICE':
            return {newSystem: {...state.newSystem, systemPrice: action.payload}}
        case 'SET_USER_ROOM_SIZE':
            return {newSystem: {...state.newSystem, userRoomSize: action.payload}}
        case 'SET_USER_ID':
            return { newSystem: { ...state.newSystem, userId: action.payload } }
        default:
            return state;
    }
};

// componentsReducer will be on the redux state at:
// state.componentsReducer
export default newSystem;