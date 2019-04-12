import axios from 'axios'
export const ADDCOURSE = "ADDCOURSE";
export const ON_INITIAL_LOAD = "ON_INITIAL_LOAD";

export const add = () => {
    return {
        type: ADDCOURSE
    }
} 

export const onInitialLoad = (payload) => {
    return {
        type: ON_INITIAL_LOAD,
        ...payload
    }
}
export const initialLoad = payload => {
    return dispatch => {
        axios.get("https://notes-app-1510f.firebaseio.com/courseList.json")
            .then(res => dispatch(onInitialLoad({courseList: res.data})))
    }
}
