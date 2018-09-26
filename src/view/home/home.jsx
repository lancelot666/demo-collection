import React, { Component } from 'react';
import {connect} from 'react-redux';
class Home extends Component{
    constructor(props){
        super(props);
        console.log('home组件初始化',this.props)
       //this.props.setRouteKey(this.props.location.pathname); //初始化时，设置路由Key
    }
    componentDidMount(){
        
    }
    render(){
        return(
            <div>home</div>
        )
    }
}
const mapState = (state)=>{
    return {
        appData:state.appData//对应本组件props需要的属性products
    }
  }
  const mapDsipatch=(dispatch)=>{
    return{
    }
  }
export default connect(mapState,mapDsipatch)(Home);