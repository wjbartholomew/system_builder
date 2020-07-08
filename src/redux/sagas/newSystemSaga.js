import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';



function* addNewSystem(action) {
//     console.log('in add saga', action.payload)
//     try {
//         const cables = yield axios.get(`/system/${action.payload}`)
//         yield put({ type: 'SET_CABLES', payload: cables.data })
//     } catch (error) {
//         console.log('GET FAILED', error)
//     }
}

function* newSystemSaga() {
    yield takeLatest('ADD_TO_NEW_SYSTEM', addNewSystem);
}

export default newSystemSaga;
