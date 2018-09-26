import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Breadcrumb} from 'antd';
import {menuItem} from '../utils/menu';
class Crumb extends Component{
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
const mapState = (state)=>{
    return {
        appData:state.appData//对应本组件props需要的属性products
    }
}
export default connect(mapState)(Crumb);