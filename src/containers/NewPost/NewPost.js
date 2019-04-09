import React, {Component} from 'react';
import Input from './../../components/ui/Input/Input';
import {withRouter} from 'react-router-dom';

class NewPost extends Component {
    
    constructor(props){
        super(props)
        
        let identifier;
        
        if (!props.selectedCourse)
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
        if(props.selectedItems && props.selectedItems.length === 1)
            this.state = {...props.selectedItems[0]}
        else
            this.state = new item(props.inputLists[identifier]);
        
    }
    
    render(){
        return (
      	       <Input list = {this.state.properties} 
      	              editItem = {this.state.editItem}  
      	              changedHandler = {this.inputChangedHandler}
      	              clickedHandler = {this.submitHandler}/>
        );
    }
    
    submitHandler = () => {
        const {selectedItems} = this.props;
        let previousObj = null
        
        if(selectedItems && selectedItems.length === 1){
            previousObj = selectedItems[0]
        }
        const tempObj = {...this.state};
        tempObj["date"] = new Date;
        this.props.submitHandler(tempObj, previousObj);
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
}



export default withRouter(NewPost);