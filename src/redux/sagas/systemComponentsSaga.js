import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* addComponent(action) {
    console.log('in addComponent saga', action.payload)
    try {
        const component = yield axios.get(`/system/${action.payload}`)
        yield put({ type: 'SET_SYSTEM_COMPONENTS', payload: component.data })
    } catch (error) {
        console.log('GET FAILED', error)
    }
}

function* saveSystemComponentsToDatabase(action){
    console.log('save components to database')
    console.log('action.payload',action.payload)
    try {
        yield axios.post(`/system/components`, action.payload)
        yield put({ type: 'RESET_SYSTEM_COMPONENTS' })
    } catch (error) {
        console.log('SAVE SYSTEM POST FAILED', error)
    }
}


function* systemComponentsSaga() {
    yield takeLatest('ADD_TO_SYSTEM_COMPONENTS', addComponent);
    yield takeLatest('SAVE_SYSTEM_COMPONENTS_TO_DATABASE', saveSystemComponentsToDatabase);
}

export default systemComponentsSaga;