import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';



function* addCables(action) {
    console.log('in add saga', action.payload)
    try {
        const cables = yield axios.get(`/system/${action.payload}`)
        yield put({ type: 'SET_CABLES', payload: cables.data })
    } catch (error) {
        console.log('GET FAILED', error)
    }
}

function* cablesSaga() {
    yield takeLatest('ADD_TO_CABLES', addCables);
}

export default cablesSaga;
