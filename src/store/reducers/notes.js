import * as actionTypes from './../actions/actionTypes';
import {objectToArray} from './../utility';

const initialState = {
    courseData: {},
    selectedCourse: null,
    
    inputLists: {
      course: {
        "Course Name": "input",
        "Description": "textbox",
      },
      module: {
        "Module Name": "input",
        "Description": "textbox"
      }
    },
    selectedItems: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
            
        case actionTypes.ON_INITIAL_LOAD:
            return {
                ...state,
                courseData: action.data, 
            }
            
        case actionTypes.ON_INIT_ADD_NEW:
            return {
                ...state,
                adding: false
            }
            
        case actionTypes.ON_SUCCESS_ADD_NEW:
            return {
                ...state,
                courseData: {...state.courseData, ...action.data},
                adding: true
            }
            
        case actionTypes.ON_FINISH_ADD_NEW:
            return {
                ...state,
                adding:false
            }
        default:
            return state
    }
}

export default reducer;
