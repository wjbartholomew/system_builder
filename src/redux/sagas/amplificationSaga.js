import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';



function* addAmplification(action) {
    console.log('in add saga', action.payload)
    try {
        const amplification = yield axios.get(`/system/${action.payload}`)
        yield put({ type: 'SET_AMPLIFICATION', payload: amplification.data })
    } catch(error){
        console.log('GET FAILED', error)
    }
}

function* amplificationSaga() {
    yield takeLatest('ADD_TO_AMPLIFICATION', addAmplification);
}

export default amplificationSaga;
