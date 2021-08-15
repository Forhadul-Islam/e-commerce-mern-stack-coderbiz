import {
  FundOutlined,
  PieChartOutlined,
  PlusSquareOutlined,
  TeamOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../images/logo-white.png';
import Header from '../header/Header';
import UserContainer from './UserContainer';
   
  
  const { Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;


  

const UserDashboardTemplate = () => {
    const [collapsed, setCollapsed] = useState(false);
  const [breadCrumb, setBreadCrumb] = useState('dashboard')
  const history = useHistory()
  const location = useLocation()
  const breadcrumbItem = (pathname) =>{
    let path = pathname.split('/')[2];
    setBreadCrumb(path)
  }

  useEffect(()=>{
    breadcrumbItem(location.pathname)
  }, [location])

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };


  const routeUserDashboard = () =>{
    history.replace('/my-account/profile')
  }
  const routUserCourses = () =>{
    history.replace('/my-account/courses')
  }
  const routeUserChatRoom = () =>{
    history.replace('/my-account/chat')
  }
  const routeUserNoticeBoard = () =>{
    history.replace('/my-account/notice')

  }
  const routeUserReviews = () =>{
    history.replace('/my-account/review')

  }
    return (
        <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo">
              <img className="sidebar-logo" src={logo} alt="logo" />
          </div>
          <Menu theme="dark"  mode="inline">
            <Menu.Item onClick={routeUserDashboard} key="1" icon={<FundOutlined />}>
              Profile
            </Menu.Item>
            <Menu.Item onClick={routUserCourses} key="2" icon={<PieChartOutlined />}>
              My Courses
            </Menu.Item>
            <Menu.Item onClick={routeUserNoticeBoard} key="3" icon={<PlusSquareOutlined />}>
              Notice Board
            </Menu.Item>
            {/* <Menu.Item onClick={routeUserReviews} key="4" icon={<PlusSquareOutlined />}>
              Review CoderBiz
            </Menu.Item> */}
            {/* <Menu.Item onClick={routeUserChatRoom} key="5" icon={<DesktopOutlined />}>
              Chat Room
            </Menu.Item> */}
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Chat Room">
              <Menu.Item key="6">Team Management</Menu.Item>
              <Menu.Item key="8">Team Instructor</Menu.Item>
            </SubMenu>
            {/* <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item> */}
          </Menu>
        </Sider>
        <Layout className="site-layout">
           <Header />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>{breadCrumb}</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <UserContainer />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>CoderBiz ©2020 all rights reserved</Footer>
        </Layout>
      </Layout>
    )
}

export default UserDashboardTemplate
