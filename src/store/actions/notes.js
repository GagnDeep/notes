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