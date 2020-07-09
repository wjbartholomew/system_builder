import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';



function* saveSystemToDatabase(action) {
    console.log('save to database')
    try {
        yield axios.post(`/system`, this.props.state.newSystem.newSystem)
        yield put({ type: 'RESET_NEW_SYSTEM' })
    } catch (error) {
        console.log('POST FAILED', error)
    }
}

function* newSystemSaga() {
    yield takeLatest('SAVE_SYSTEM_TO_DATABASE', saveSystemToDatabase);
}

export default newSystemSaga;
