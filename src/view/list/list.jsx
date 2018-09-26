import React, { Component } from 'react';
class List extends Component{
    constructor(props){
        super(props);
        console.log('list组件初始化')
    }
    render(){
        return(
            <div>List</div>
        )
    }
}
export default List;