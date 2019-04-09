import React from 'react';
import styles from './Footer.module.css';
import Aux from './../../../hoc/Auxilary/Aux';
import Button from './../Button/Button';
import {Link} from 'react-router-dom';

const footer = props => {
    let content = null
    
    
    if(props.showConfirmDialog)
        content = <Aux>
                      <Button btnType = {"Confirm"}
                           handler = {props.confirmedHandler}>
                                    CONFIRM !!!!
                      </Button>
                      <Button btnType = {"Cancel"}
                           handler = {props.cancelHandler}>
                                    CANCEL
                      </Button>
                  </Aux>
    else
        if(props.selectedItems.length === 1)
            content = <Aux>
                        <Link to="/edit-post">
                          <Button btnType = {"Edit"}
                               handler = {props.editHandler}>
                                    Edit <i className="fas fa-edit"></i>
                          </Button> 
                        </Link>
                        
                          <Button btnType = {"Delete"}
                               handler = {props.deleteHandler}>
                                    DELETE <i className="fas fa-trash-alt"></i>
                          </Button>
                      </Aux>
        else
            content = <Button btnType = {"Delete"}
                               handler = {props.deleteHandler}>
                                DELETE  
                                <i className="fas fa-trash-alt"></i>
                      </Button>
    
    return (
        <div className = {styles.FooterContainer}>
           {content}
        </div>
    );
}

export default footer;