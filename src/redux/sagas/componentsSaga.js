import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* getSources() {
    try{
        const sources = yield axios.get('/sources')
        yield put ({type: 'SET_SOURCES', payload: sources.data})
    }catch(error) {
    console.log('GET FAILED:', error)}
}

function* componentsSaga() {
    yield takeLatest('GET_SOURCES', getSources);
}

export default componentsSaga;
