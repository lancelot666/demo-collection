import React, { Component } from 'react';
import * as style from './App.less';
import {connect} from 'react-redux';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {menuItem} from './utils/menu';
import * as app from './redux/actions/appAction';
//import AppMenu from './components/appMenu';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {
  constructor(props){
    super(props);
    console.log('app init...')
    this.state = {
      collapsed: false,
    };
    console.log(this.props)
  }
  onCollapse = (collapsed) => { //侧面栏收缩
    console.log(collapsed);
    this.setState({ collapsed });
  }
  openSonItem(e){
    console.log(e)
    let item = e.item.props;
    let arr =[];
    if(item.parent){arr.push(item.parent);}
    arr.push(item.title)
    this.props.setCrumb(arr);
  }
  render() {
    return (
      <div className={style.app}>
        <Layout style={{ minHeight: '100vh' }}>
          {/* <AppMenu></AppMenu> */}
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className={style.logo} />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
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
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
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
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                Bill is a cat.
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
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
export default connect(mapState,mapDsipatch)(App);
