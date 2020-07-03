import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';



function* addSource(action) {
    try {
        const source = axios.get(`/components/${action.payload}`)
        yield put({ type: 'SET_SOURCE', payload: source.data })
    } catch(error){
        console.log('GET FAILED', error)
    }
}

function* sourceSaga() {
    yield takeLatest('ADD_TO_SOURCE', addSource);
}

export default sourceSaga;
