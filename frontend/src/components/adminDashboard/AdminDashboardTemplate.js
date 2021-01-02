import {
  DesktopOutlined,
  FileOutlined,
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
import AdminContainer from './AdminContainer';
 

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const AdminDashboardTemplate = () => {
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


  const routeDashboard = () =>{
    history.replace('/admin/dashboard')
  }
  const routProducts = () =>{
    history.replace('/admin/products')
  }
  const routeCustomers = () =>{
    history.replace('/admin/customers')
  }
  const routeNewProducts = () =>{
    history.replace('/admin/create-new-product')

  }


 
    return (
      <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo">
              <img className="sidebar-logo" src={logo} alt="logo" />
          </div>
          <Menu theme="dark"  mode="inline">
            <Menu.Item onClick={routeDashboard} key="1" icon={<FundOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item onClick={routProducts} key="2" icon={<PieChartOutlined />}>
              Products
            </Menu.Item>
            <Menu.Item onClick={routeNewProducts} key="3" icon={<PlusSquareOutlined />}>
              Create new product
            </Menu.Item>
            <Menu.Item onClick={routeCustomers} key="4" icon={<DesktopOutlined />}>
              Customers
            </Menu.Item>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Chat Room">
              <Menu.Item key="6">Team Management</Menu.Item>
              <Menu.Item key="8">Team Instructor</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
           <Header />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Admin</Breadcrumb.Item>
              <Breadcrumb.Item>{breadCrumb}</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <AdminContainer />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>CoderBiz ©2020 all rights reserved</Footer>
        </Layout>
      </Layout>
    </>
    )
  }



export default AdminDashboardTemplate;