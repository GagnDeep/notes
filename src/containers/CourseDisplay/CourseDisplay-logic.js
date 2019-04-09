import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import CourseDisplay from './CourseDisplay'
import axios from 'axios';

Array.prototype.index2 = function(item, identifier){
  return this.findIndex(e => e[identifier] === item)
}

class CourseDisplayLogic extends Component {
    
    state = {
        courseData: {},
        modules: [],
        selectedModules: [],
        selectedCourse: {},
        identifier: "Module Name"
    }
    
    componentDidMount(){
        this.updatePage()
    }
    updatePage(){
        let id = this.props.match.params.id;
        axios.get(`https://notes-app-1510f.firebaseio.com/courseList/${id}.json`)
            .then(res => {
                if(res.data){
                    let data = Object.keys(res.data.modules?res.data.modules:{}).map(e => {return {...(res.data.modules[e]), id: e}});
                    console.log(data)
                    this.setState({courseData: {...res.data, id: id}, modules: data})
                // console.log(res) 
                }
            })
    }
    render(){
        console.log(this.props)
        return <CourseDisplay submitHandler = {this.submitHandler} 
                    inputLists = {this.props.inputLists}
                    id = {this.props.match.params.id}
                    selectedCourse = {this.getSelectedCourse()}
                    content  = {this.getContent()}
                    selectedModules = {this.state.selectedModules}
                    showNew = {this.state.selectedModules.length === 0}
                    modules = {this.state.modules}
                    identifier = {this.state.identifier}/>
    }
    
    getSelectedCourse = () => {
        return this.state && this.state.courseData && this.state.courseData.properties ? this.state.courseData: null;
    }
    
    getContent = () => {
        let selectedCourse = this.getSelectedCourse();
        // debugger;
        return selectedCourse?selectedCourse.properties["Course Name"].value:"Notes"
    }
    
    submitHandler = (obj, prevObj) => {
        
        let id = this.props.match.params.id;
        
        if(prevObj){
            axios.put()
        }else{
            axios.post(`https://notes-app-1510f.firebaseio.com/courseList/${id}/modules.json`, obj)
                .then(e => console.log(e))
            this.props.history.replace(`/course-modules/${id}`)
            this.updatePage();
        }
    }
}

export default withRouter(CourseDisplayLogic);