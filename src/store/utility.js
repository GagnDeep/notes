

export const addCourse = (state, action) => {
    console.log("jahsdjhsakf")
    return dispatch => {
        
    }
}

export const objectToArray = obj => obj?Object.keys(obj).map(el => {
    return {
        id: el,
        ...obj[el]
    }
}):[];