import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* getExistingSystems() {
    console.log('you hit get existing system details')
    try {
        const existingSystems = yield axios.get('/existing');
        yield put({ type: 'SET_EXISTING_SYSTEMS', payload: existingSystems.data })
    } catch (error) {
        console.log('GET EXISTING SYSTEMS FAILED:', error)
    }
}

function* getExistingComponents() {
    console.log('you hit get existing system components')
    try {
        const existingComponents = yield axios.get('/existingcomponents');
        yield put({ type: 'SET_EXISTING_SYSTEM_COMPONENTS', payload: existingComponents.data })
    } catch (error) {
        console.log('GET EXISTING SYSTEM COMPONENTS FAILED:', error)
    }
}


function* existingSystemsSaga() {

    yield takeLatest('GET_EXISTING_SYSTEMS', getExistingSystems);
    yield takeLatest('GET_EXISTING_SYSTEM_COMPONENTS', getExistingComponents);
}

export default existingSystemsSaga;