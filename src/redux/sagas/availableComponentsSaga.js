import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* getComponents() {
    try{
        const components = yield axios.get('/components')
        yield put({ type: 'SET_AVAILABLE_COMPONENTS', payload: components.data})
    }catch(error) {
    console.log('GET FAILED:', error)}
}


function* availableComponentsSaga() {

    yield takeLatest('GET_COMPONENTS', getComponents);

}

export default availableComponentsSaga;
