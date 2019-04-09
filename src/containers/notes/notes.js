import React from 'react';
import Navbar from './../../components/ui/Navbar/Navbar';
import styles from './notes.module.css';
import Footer from './../../components/ui/Footer/Footer';
import {Route, Link} from 'react-router-dom';
import NewPost from './../NewPost/NewPost';
import List from './../../components/Layout/List/List';
import CourseDisplay from './../CourseDisplay/CourseDisplay';



const Notes  = props => {
    const {nav, footer, selectedCourse, inputLists, submitHandler, list, courseList} = props;
    
    console.log(courseList)
    
    console.log(inputLists)
    
    return (
        <div className = {styles.Container}>
            <Navbar newHandler = {nav.newHandler} showNew = {nav.showNew}>
                {nav.content}
            </Navbar>
                
            
                <Route path = "/new-post" render = {() =>(
                    <NewPost inputLists = {inputLists} 
                        submitHandler = {submitHandler}
                        selectedCourse = {selectedCourse}/>
                )} />
                
                <Route path = "/edit-post" exact render = {() => (
                    <NewPost inputLists = {inputLists} 
                        submitHandler = {submitHandler}
                        selectedCourse = {selectedCourse}
                        selectedItems = {footer.selectedItems}/>
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