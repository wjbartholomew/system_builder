import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';



function* addAccessories(action) {
    console.log('in add saga', action.payload)
    try {
        const accessories = yield axios.get(`/system/${action.payload}`)
        yield put({ type: 'SET_ACCESSORIES', payload: accessories.data })
    } catch (error) {
        console.log('GET FAILED', error)
    }
}

function* accessoriesSaga() {
    yield takeLatest('ADD_TO_ACCESSORIES', addAccessories);
}

export default accessoriesSaga;
