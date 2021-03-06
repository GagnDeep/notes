import * as actionTypes from './../actions/actions';
import {objectToArray} from './../utility'

const initialState = {
    courseList: []
}

 const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADDCOURSE:
            console.log("success")
            return state;
            
        case actionTypes.ON_INITIAL_LOAD:
            return {
                courseList: objectToArray(action.courseList)
            }
        default:
            return state
    }
}

export default reducer;
