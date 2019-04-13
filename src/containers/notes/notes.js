import React from 'react';
import Navbar from './../../components/ui/Navbar/Navbar';
import styles from './notes.module.css';
import Footer from './../../components/ui/Footer/Footer';
import {Route, Link, Switch} from 'react-router-dom';
import NewPost from './../NewPost/NewPost';
import List from './../../components/Layout/List/List';
import CourseDisplay from './../CourseDisplay/CourseDisplay';



const Notes  = props => {
    const {nav, footer, selectedCourse, inputLists, submitHandler, list, courseList} = props;
    
    
    return (
        <div className = {styles.Container}>
            <Navbar newClickedHandler = {nav.newClickedHandler} showNew = {nav.showNew}>
                {nav.content}
            </Navbar>
                
            <Switch>
                <Route path = "/new-post" exact render = {() =>(
                    <NewPost />
                )} />
                
                <Route path = "/edit-post" exact render = {() => (
                    <NewPost />
                )}/>
                
              <Route path = "/" exact render = {() => (
                    <List 
              		    data = {courseList} 
              		    changedHandler = {list.changedHandler}
              		    clickedHandler = {list.itemClickedHandler}
              		    identifier = {list.identifier}/>
                    )
                }/>
                
                    <Route path = "/course-modules" exact render = {() => (
                        <CourseDisplay 
                            selectedCourse = {selectedCourse}
                            inputLists = {inputLists}
                        /> 
                    )}/>
                
                </Switch>
                
             {footer.showFooter?
             <Footer 
    			selectedItems = {footer.selectedItems}
    			showConfirmDialog = {footer.showConfirmDialog}
    			{...footer.handlers}/>
    		:null}   
           
        </div>     
    );
}

export default Notes;