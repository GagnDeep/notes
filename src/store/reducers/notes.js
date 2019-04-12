import * as actionTypes from './../actions/actions';
import {objectToArray} from './../utility'

const initialState = {
    courseData: {},
    selectedCourse: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
            
        case actionTypes.ON_INITIAL_LOAD:
            return {
                courseData: action.data,
                ...state
            }
            
        case actionTypes.ON_ADD_NEW:
            return {
                courseData: {...state.courseData, ...action.data},
                ...state
            }
        default:
            return state
    }
}

export default reducer;
