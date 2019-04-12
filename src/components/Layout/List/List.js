import React from 'react';
import styles from './List.module.css';
import Aux from './../../../hoc/Auxilary/Aux';
import {Link} from 'react-router-dom';

const List = props => {
    
    const {data, clickedHandler, changedHandler, identifier} = props;
    
    const item = (element, i) => (
           
        <Aux key = {element.properties[identifier].value}>
            <Link to = {`/course-modules/${element.id}`}>
                <div className = {styles.ItemName} 
                     onClick = {() => clickedHandler(element)}>
                    {element.properties[identifier].value}
                </div>
            </Link>
            
            <input type = "checkbox" 
                   onChange = {() => changedHandler(element.properties[identifier].value)}
                   className = {styles.ItemCheckbox}
                   checked = {element.checked}/>
                   
        </Aux>
    );
    
    
    return (
        <div className = {styles.CourseListContainer}>
            {data.map(item)}
        </div>
        );
    
    
}


export default List;