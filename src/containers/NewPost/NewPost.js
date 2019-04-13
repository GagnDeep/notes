import React, {Component} from 'react';
import Input from './../../components/ui/Input/Input';
import {withRouter} from 'react-router-dom';
import {Redirect} from 'react-router'
import {connect} from 'react-redux';
import * as actionTypes from './../../store/actions/actionTypes';
import * as actions from './../../store/actions/index'

class NewPost extends Component {
    
    componentWillMount(){
        this.props.onAddInit();
        
        let identifier;
        
        if (!this.props.selectedCourse)
            identifier = "course";
        else
            identifier = "module";
            
        class item{
            constructor(obj){
                this.properties = {}
                Object.keys(obj).forEach(e => this.properties[e] = {value: ""})
                this.modules = []
            }
            date = new Date;
            checked = false;
        }
            this.setState(new item(this.props.inputLists[identifier]));
        
    }
    
    render(){
        
        let form = <Input list = {this.state.properties} 
      	              editItem = {this.state.editItem}  
      	              changedHandler = {this.inputChangedHandler}
      	              clickedHandler = {this.submitHandler}/>
        
        if(this.props.adding)
            form = <Redirect to = '/'/>
        return form;
    }
    
    submitHandler = () => {
        // const {selectedItems} = this.props;
        // let previousObj = null
        
        // if(selectedItems && selectedItems.length === 1){
        //     previousObj = selectedItems[0]
        // }
        const tempObj = {...this.state};
        tempObj["date"] = new Date;
        this.props.onAddSuccess(tempObj);
    }
    
    inputChangedHandler = (event,element) => {
        const item = {...this.state.properties[element]};
        const properties = {...this.state.properties};
        
        item.value = event.target.value;
        
        properties[element] = item
        
        this.setState({
            properties: properties
        });
    }
    
    componentWillUnmount(){
        this.props.onFinishAdd()
    }
}

const mapStateToProps = state => {
    
    return {
        inputLists: state.inputLists,
        selectedCourse: state.selectedCourse,
        selectedItems: state.selectedItems,
        adding: state.adding
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddInit: () => dispatch(actions.onInitAddNew()),
        onAddSuccess: (data) => dispatch(actions.addNew(data)),
        onFinishAdd: () => dispatch(actions.onFinishAddNew())
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewPost));