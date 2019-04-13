import axios from 'axios'

import * as actionTypes from './actionTypes';

export const onInitialLoad = (payload) => {
    return {
        type: actionTypes.ON_INITIAL_LOAD,
        data: payload
    }
}

export const initialLoad = () => {
    return dispatch => {
        axios.get("https://notes-app-1510f.firebaseio.com/courseList.json")
            .then(res => {
                dispatch(onInitialLoad(res.data))
        })
    }
}

export const onInitAddNew = () => {
    return {
        type: actionTypes.ON_INIT_ADD_NEW
    }
}

export const onFailAddNew = error => {
    return {
        type: actionTypes.ON_FAIL_ADD_NEW,
        error: error
    }
}

export const onSuccessAddNew = (payload) => {
    return {
        type: actionTypes.ON_SUCCESS_ADD_NEW,
        data: payload
    }
}

export const addNew = (data) => {
    return dispatch => {
        axios.post("https://notes-app-1510f.firebaseio.com/courseList.json", data)
            .then(res => {
                //res.data.name: as response from firebase return new id of object
                //in an object with property name
                
                data = {[res.data.name]: data}
                dispatch(onSuccessAddNew(data))
            })
    }
}