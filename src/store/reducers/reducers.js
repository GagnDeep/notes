import * as actionTypes from './../actions/actions';
import {objectToArray} from './../utility'

const initialState = {
    courseList: [],
    inputLists: {
      course: {
        "Course Name": "input",
        "Description": "textbox",
      },
      module: {
        "Module Name": "input",
        "Description": "textbox"
      }
    }
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
