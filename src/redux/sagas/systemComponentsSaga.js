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


function* systemComponentsSaga() {
    yield takeLatest('ADD_TO_SYSTEM_COMPONENTS', addComponent);
}

export default systemComponentsSaga;