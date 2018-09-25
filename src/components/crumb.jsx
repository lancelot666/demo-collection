import React, { Component } from 'react';
class Crumb extends Component{
    constructor(props){
        super(props);
        console.log('面包屑组件Init')
    }
    render(){
        return(
            <Breadcrumb style={{ margin: '16px 0' }}>
                {
                  this.props.appData.crumb.length>0?
                  this.props.appData.crumb.map((item,index)=>{
                    return(
                      <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
                    )
                  })
                  :<Breadcrumb.Item key={menuItem[0].id}>{menuItem[0].title}</Breadcrumb.Item> 
                }
            </Breadcrumb>
        )
    }
}
export default Crumb;