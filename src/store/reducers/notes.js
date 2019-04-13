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
    selectedItems: {},
}

const updateCheckboxes = (state, action) => {
    const {courseData} = state,
          id = action.element.id;
    
    if (courseData[id]) {
      let tempObj = { ...courseData[id] }
      tempObj.checked = !courseData[id].checked;

      courseData[id] = tempObj; 
    }
    
    return courseData
}

const updateSelectedItems = (state, action) => {
    let {courseData} = state, selectedItems = {};
    
    
    Object.keys(courseData).forEach(e => {
        if(courseData[e].checked)
            selectedItems[e] = courseData[e]
    })
    return selectedItems
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
            
        case actionTypes.ON_CHECKBOX_CHANGE:
            return {
                ...state,
                courseData: updateCheckboxes(state, action),
                selectedItems: updateSelectedItems(state, action)
            }
            
        default:
            return state
    }
}

export default reducer;
