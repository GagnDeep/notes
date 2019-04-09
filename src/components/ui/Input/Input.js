import React from 'react';
import styles from './Input.module.css';
import Aux from './../../../hoc/Auxilary/Aux';
import {withRouter} from 'react-router-dom';

const input = props => {
    return (
        <div className = {styles.Container}>
            {
                Object.keys(props.list).map(e => {
                    return (
                        <Aux key = {e}>
                            <p>{e}</p>
                            <input onChange = {(event) => {
                                props.changedHandler(event, e)
                            }}
                            defaultValue = {props.list[e].value}/>
                        </Aux>
                    );
                })
            }
            <button onClick = {props.clickedHandler}>Submit</button>
            <button onClick = {() => props.history.replace("/")} >Cancel</button>
            
        </div>
    );
}

export default withRouter(input) ;