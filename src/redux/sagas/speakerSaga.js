import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';



function* addSpeaker(action) {
    console.log('in add saga', action.payload)
    try {
        const Speaker = yield axios.get(`/system/${action.payload}`)
        yield put({ type: 'SET_SPEAKERS', payload: Speaker.data })
    } catch (error) {
        console.log('GET FAILED', error)
    }
}

function* speakerSaga() {
    yield takeLatest('ADD_TO_SPEAKERS', addSpeaker);
}

export default speakerSaga;
