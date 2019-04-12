import * as actionTypes from './../actions/actions';
import {objectToArray} from './../utility'

const initialState = {
    courseData: {},
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
            
        case actionTypes.ON_INITIAL_LOAD:
            return {
                courseData: action.data
            }
        default:
            return state
    }
}

export default reducer;
