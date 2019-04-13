import React, {Component} from 'react';
import Notes from './notes';
import { BrowserRouter } from 'react-router-dom';
import { Route, Link, Switch, withRouter} from 'react-router-dom';
import axios from 'axios';
import CourseDisplay from './../CourseDisplay/CourseDisplay-logic';
import * as actionTypes from './../../store/actions/actionTypes';
import * as actions from './../../store/actions/index';
import {objectToArray} from './../../store/utility';

import { connect } from 'react-redux';

Array.prototype.index = function(item, identifier) {
  return this.findIndex(e => e.properties[identifier].value === item)
}

class notes extends Component {

  //this class will handle all the main navigation of the app

  state = {
    newEntry: false,

    selectedItems: [],

    showConfirmDialog: false,
    editItem: false,

    selectedCourse: null,

    

  }

  componentDidMount() {
    this.syncData()
  }





  render() {

    return (
      <Switch>
          
            <Route path = "/course-modules/:id" render = {() => (
              <CourseDisplay inputLists = {this.state.inputLists}
                selectedCourse = {this.state.selectedCourse}/>
            )}/>
            <Route path = "/"  render = {() => (
             <Notes {...(this.notes_props())}/> 
             )}/>
           
            
          </Switch>
    );
  }


  syncData = () => {
    axios.get("https://notes-app-1510f.firebaseio.com/courseList.json")
      .then(res => {
        if (res.data) {
          let dataArr = Object.keys(res.data).map(e => { return { ...res.data[e], id: e } })
          this.setState({ courseList: dataArr });
        }
      })
  }


  checkedListItems = () => {
    let selectedItems = this.props.courseList.filter(e => e.checked);
    this.setState({ selectedItems: selectedItems });
  }

  checkboxChangedHandler = itemName => {
    let identifier = this.getIdentifier(),
      courseList = [...this.props.courseList]

    let index = courseList.index(itemName, identifier);

    if (index !== -1) {
      let tempObj = { ...courseList[index] }
      tempObj.checked = !courseList[index].checked;

      courseList[index] = tempObj;
      this.setState({ courseList: courseList }, this.checkedListItems)
    }
    else
      throw courseList;
  }

  // submitHandler = (obj, prevObj) => {

  //   let courseList = [...this.props.courseList];
  //   let identifier = this.getIdentifier();

  //   if(prevObj){
  //     let index = courseList.index(prevObj.properties[identifier].value, identifier);
  //     courseList[index] = obj;
  //     obj.checked = false;
  //     axios.put(`https://notes-app-1510f.firebaseio.com/courseList/${obj.id}.json`, obj)

  //   }else{
  //     courseList.push(obj);
  //     axios.post("https://notes-app-1510f.firebaseio.com/courseList.json", obj)

  //   }
  //     courseList = this.resetCheckboxes(courseList);


  //     this.setState({courseList: courseList});
  // }


  itemDeleteHandler = () => {
    this.setState({ showConfirmDialog: true })
  }

  itemEditHandler = () => {
    this.tempObj = { ...this.state.selectedItems[0] }
    this.setState({ editItem: true })
  }
  
  

  confirmedHandler = () => {
    let courseList = [...this.props.courseList];
    let selectedItems = [...this.state.selectedItems];
    let identifier = this.getIdentifier();

    selectedItems.forEach(e => {
      courseList.splice(courseList.index(e.properties[identifier].value, identifier), 1);
      axios.delete(`https://notes-app-1510f.firebaseio.com/courseList/${e.id}.json`)
    })

    courseList = this.resetCheckboxes(courseList);


    this.setState({ courseList: courseList, selectedItems: [], showConfirmDialog: false })
  }

  getIdentifier = () => {
    return this.state.selectedCourse ? "Module Name" : "Course Name"
  }

  resetCheckboxes = (courseList) => {
    this.setState({ selectedItems: [] })
    return courseList.map(e => {
      let tempObj = { ...e };
      tempObj.checked = false
      return tempObj;
    })
  }


  confirmCancelHandler = () => {
    let courseList = [...this.props.courseList];

    courseList = this.resetCheckboxes(courseList);

    this.setState({ showConfirmDialog: false, selectedItems: [], courseList: courseList })
  }
  courseList = () => {

    return this.props.courseList
  }

  itemClickedHandler = (element) => {
    this.setState({ selectedCourse: element })
  }
  
  newClickedHandler = () => {
    this.props.onInitAdd();
  }

  notes_props = () => {
    return {
      nav: {
        showNew: !this.state.selectedItems.length,
        newHandler: this.newClickedHandler,
        content: !this.state.selectedCourse ? "Notes" : this.state.selectedCourse.properties["Course Name"].value
      },

      footer: {
        showFooter: this.state.selectedItems.length !== 0,
        selectedItems: this.state.selectedItems,
        showConfirmDialog: this.state.showConfirmDialog,

        handlers: {
          deleteHandler: this.itemDeleteHandler,
          editHandler: this.itemEditHandler,
          confirmedHandler: this.confirmedHandler,
          cancelHandler: this.confirmCancelHandler,
        }
      },

      list: {
        data: this.props.courseList,
        identifier: this.getIdentifier(),
        changedHandler: this.checkboxChangedHandler,
        itemClickedHandler: this.itemClickedHandler
      },

      selectedCourse: this.state.selectedCourse,
      inputLists: this.state.inputLists,
      courseList: this.props.courseList,

    }
  }

}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    courseData: state.courseData,
    inputLists: state.inputLists,
    courseList: objectToArray(state.courseData)

  }
}
const mapDispatchToProps = dispatch => {
  return {
    onInitAdd: () => dispatch(actions.onInitAddNew())
  }
}

export default withRouter(connect(mapStateToProps)(notes));