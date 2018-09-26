import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import * as style from './App.less';
import {connect} from 'react-redux';
import { Layout, Breadcrumb} from 'antd';
import {menuItem} from './utils/menu';
import * as app from './redux/actions/appAction';
import AppMenu from './components/appMenu';
import Home from './view/home/home';
import List from './view/list/list';
import NotFound from './view/404/404';

const { Header, Content, Footer } = Layout;

class App extends Component {
  constructor(props){
    super(props);
    console.log('app init...')
    this.state = {
    };
  }
  componentDidMount(){
  }
  render() {
    const match=this.props.match;
    return (
      <div className={style.app}>
        <Layout style={{ minHeight: '100vh' }}>
          <AppMenu url={this.props.location.pathname}></AppMenu>
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
                <Switch>
                  <Redirect exact from={`${match.url}`} to={`${match.url}/home`}/>
                  <Route exact match='match' path={`${match.url}/home`} component={Home} />
                  <Route exact match='match' path={`${match.url}/home/list`} component={List} />
                  <Route component={NotFound} />
                </Switch>
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
const mapState = (state)=>{
  //console.log(state)
  return {
      appData:state.appData//对应本组件props需要的属性products
  }
}
const mapDsipatch=(dispatch)=>{
  return{
    setCrumb:(val)=>dispatch(app.SETCRUMB(val)),
    // setRouteKey:(val)=>dispatch(app.SETROUTEKEY(val))
  }
}
export default connect(mapState,mapDsipatch)(App);
