import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* getSources() {
    try{
        const sources = yield axios.get('/components/sources')
        yield put({ type: 'SET_AVAILABLE_SOURCES', payload: sources.data})
    }catch(error) {
    console.log('GET FAILED:', error)}
}

function* getAmplification() {
    try {
        const amplification = yield axios.get('/components/amplification')
        yield put({ type: 'SET_AVAILABLE_AMPLIFICATION', payload: amplification.data })
    } catch (error) {
        console.log('GET FAILED:', error)
    }
}

function* getSpeakers() {
    try {
        const speakers = yield axios.get('/components/speakers')
        yield put({ type: 'SET_AVAILABLE_SPEAKERS', payload: speakers.data })
    } catch (error) {
        console.log('GET FAILED:', error)
    }
}

function* getCables() {
    try {
        const cables = yield axios.get('/components/cables')
        yield put({ type: 'SET_AVAILABLE_CABLES', payload: cables.data })
    } catch (error) {
        console.log('GET FAILED:', error)
    }
}

function* getAccessories() {
    try {
        const accessories = yield axios.get('/components/accessories')
        yield put({ type: 'SET_AVAILABLE_ACCESSORIES', payload: accessories.data })
    } catch (error) {
        console.log('GET FAILED:', error)
    }
}

function* componentsSaga() {

    yield takeLatest('GET_SOURCES', getSources);
    yield takeLatest('GET_AMPLIFICATION', getAmplification);
    yield takeLatest('GET_SPEAKERS', getSpeakers);
    yield takeLatest('GET_CABLES', getCables);
    yield takeLatest('GET_ACCESSORIES', getAccessories);
}

export default componentsSaga;
