import React from 'react';
import styles from './Dialog.module.css';

const Dialog = props => {
    return (
        <div style = {{height: props.height, width: props.width}}
             className = {styles.DialogBoxContainer}>
            
        </div>
    );
}

export default Dialog;