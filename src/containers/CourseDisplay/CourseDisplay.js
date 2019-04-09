import React from 'react';
import Navbar from './../../components/ui/Navbar/Navbar';
import Footer from './../../components/ui/Footer/Footer';
import {Route, Link} from 'react-router-dom';
import NewPost from './../NewPost/NewPost';
import List from './../../components/Layout/List/List';
import styles from './../notes/notes.module.css';


const CourseDisplay = props => {
    const {id, 
           submitHandler, 
           inputLists, 
           selectedCourse, 
           content, 
           showNew,
           selectedModules,
           modules,
           identifier
    } = props;
    console.log(inputLists)
    return (
    <div className = {styles.Container}>
           <Navbar showNew = {true} selectedCourse = {selectedCourse}>
                {content}
            </Navbar>
                
            <Route path = "/course-modules/:id/new-post" render = {() =>(
                    <NewPost inputLists = {inputLists} 
                        submitHandler = {submitHandler}
                        selectedCourse = {selectedCourse}/>
            )} />
            <Route path = '/course-modules/:id' render = {() => (
                <List data = {modules} identifier = {identifier}/>
            )}/>
                
        </div>  
    );
}

export default CourseDisplay