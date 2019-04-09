import React from 'react';
import styles from './Button.module.css';
const Button = props => (
          <div className = {styles[props.btnType]}
               onClick = {props.handler}>
                        {props.children}
          </div>  
);

export default Button;