import React from 'react';
import styles from './Navbar.module.css';
import {NavLink, withRouter} from 'react-router-dom';

console.log(styles)

const Navbar = props => {
    let path = props.location.pathname === "/new-post"? "/":"/new-post";
    // debugger;
    
    if(props.selectedCourse){
        let id = props.selectedCourse.id;
        path = props.location.pathname === `/course-modules/${id}/new-post`?
                    `/course-modules/${id}`:`/course-modules/${id}/new-post`
    }
    
    return (
        <div className = {styles.Navbar}>
            <div className = {styles.Hamburger}>
                <i className="fas fa-bars"></i>
            </div>
            
                <div className = {styles.Content}>
                    {props.children}
                </div>
            {props.showNew?
                (<NavLink to = {path} 
                      activeClassName = {styles.myactive} 
                      onClick = {props.newClickedHandler}>
                        <i className="fas fa-plus"></i>
                </NavLink>):null}
        </div>
    );
}

export default withRouter(Navbar);