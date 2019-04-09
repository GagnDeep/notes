import React from 'react';
import styles from './Form.module.css';

const form = props => {
    return (
        <div className = {styles.Form} onClick = {props.clickedHandler}>  
            {props.children}
        </div>
    )
}

export default form;