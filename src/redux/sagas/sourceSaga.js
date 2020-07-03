import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';



function* addSource(action) {
    console.log('in add saga', action.payload)
    try {
        const source = yield axios.get(`/system/${action.payload}`)
        yield put({ type: 'SET_SOURCE', payload: source.data })
    } catch(error){
        console.log('GET FAILED', error)
    }
}

function* sourceSaga() {
    yield takeLatest('ADD_TO_SOURCE', addSource);
}

export default sourceSaga;
