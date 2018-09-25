import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as app from '../redux/actions/appAction';
import { Layout,Menu, Icon } from 'antd';
import {menuItem} from '../utils/menu';
import * as style from '../App.less';
const {Sider } = Layout;
const SubMenu = Menu.SubMenu;
class appMenu extends Component{
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
          };
        console.log('主页菜单栏组件Init')
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
            <Menu theme="dark" defaultSelectedKeys={[menuItem[0].id]} mode="inline">
              {menuItem.map((item)=>{
                if(item.child&&item.child.length>1){
                  return(
                    <SubMenu
                      key={item.id}
                      title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}
                    >
                      {item.child.map((sonItem)=>{
                        return(
                          <Menu.Item onClick={this.openSonItem.bind(this)} title={sonItem.title} parent={item.title} key={sonItem.id}>{sonItem.title}</Menu.Item>
                        )
                      })}
                    </SubMenu>
                  )
                }
                return(
                  <Menu.Item key={item.id} title={item.title} onClick={this.openSonItem.bind(this)}>
                    <Icon type={item.icon} />
                    <span>{item.title}</span>
                  </Menu.Item>
                )
              })}
            </Menu>
          </Sider>
        )
    }
}
function mapState(state) {
    //console.log(state)
    return {
        appData:state.appData//对应本组件props需要的属性products
    }
  }
  function mapDsipatch(dispatch){
    return{
      setCrumb:(val)=>dispatch(app.SETCRUMB(val))
    }
  }
export default connect(mapState,mapDsipatch)(appMenu);