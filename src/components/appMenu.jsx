import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as app from '../redux/actions/appAction';
import { Layout,Menu, Icon } from 'antd';
import {menuItem} from '../utils/menu';
import * as style from '../App.less';
import {Link} from 'react-router-dom';
const {Sider } = Layout;
const SubMenu = Menu.SubMenu;
class appMenu extends Component{
    constructor(props){
      super(props);
      //console.log('主页菜单栏组件初始化',props)
      this.setBreadCrumb(props.url);  //设置面包屑
      this.state = {
        collapsed: false,             //折叠开关
        routeKey:this.props.url,      //传入的url
      };
    }
    setBreadCrumb(url){ 
      if(url==='/app')url = '/app/home'; //手动重定向
      let arr = [];
      let res1 = menuItem.filter((item)=>{
        return item.id === url;
      })
      if(!res1.length){ //如果一层没有遍历出来，进行二层遍历
        menuItem.map((item)=>{
          if(item.child.length){
            let res2 = item.child.filter((sonItem)=>{
              return sonItem.id === url;
            });
            if(res2.length){
              return arr.push(item.title,res2[0].title);
            }
          }
          return true;
        }) 
        // for(let i in menuItem){
        //   if(menuItem[i].child.length){
        //     let res = menuItem[i].child.filter((item)=>{
        //       return item.id === url;
        //     });
        //     if(res.length){
        //       arr.push(menuItem[i].title,res[0].title);
        //       return this.props.setCrumb(arr);
        //     }
        //   }
        // }
      }else{
        arr.push(res1[0].title);
      } 
      this.props.setCrumb(arr);
    }
    onCollapse = (collapsed) => { //侧面栏收缩
        console.log(collapsed);
        this.setState({ collapsed });
    }
    openSonItem(e){ //点击菜单栏
        console.log(e)
        let item = e.item.props;
        let arr =[];
        if(item.parent){arr.push(item.parent);}
        arr.push(item.title)
        this.props.setCrumb(arr);
    }
    render(){
        return(
            <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className={style.logo} />
            <Menu theme="dark" defaultSelectedKeys={[this.state.routeKey===''||this.state.routeKey==='/app'?'/app/home':this.state.routeKey]} mode="inline">
              {menuItem.map((item)=>{
                if(item.child&&item.child.length>1){
                  return(
                    <SubMenu
                      key={item.id}
                      title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}
                    >
                      {item.child.map((sonItem)=>{
                        return(    
                          <Menu.Item onClick={this.openSonItem.bind(this)} title={sonItem.title} parent={item.title} key={sonItem.id}>
                            <Link key={sonItem.id} to={sonItem.id}>{sonItem.title}</Link>
                          </Menu.Item>
                        )
                      })}
                    </SubMenu>
                  )
                }
                return(
                  <Menu.Item key={item.id} title={item.title} onClick={this.openSonItem.bind(this)}>
                    <Link key={item.id} to={item.id}>
                      <Icon type={item.icon} />
                      <span>{item.title}</span>
                    </Link>
                  </Menu.Item>
                )
              })}
            </Menu>
          </Sider>
        )
    }
}
const mapState = (state)=>{
  //console.log(state)
  return {
      appData:state.appData//对应本组件props需要的属性products
  }
}
const mapDsipatch=(dispatch)=>{
  return{
    setCrumb:(val)=>dispatch(app.SETCRUMB(val)),
  }
}
export default connect(mapState,mapDsipatch)(appMenu);