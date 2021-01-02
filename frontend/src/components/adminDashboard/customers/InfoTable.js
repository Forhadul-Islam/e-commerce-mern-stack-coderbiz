import { Space, Table, Tag } from 'antd';
import React from 'react';
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';








const InfoTable = () => {
    const {users} = useSelector(state => state.adminReducer)
    const data = users.map(user => (
        {
            key: user._id,
            name: user.name ? user.name : 'kamal',
            email: user.email,
            phone: user.phone? user.phone: '0190000000',
            clearance: [user.clearance],
            enrolledCourses: user.coursesOwned.length
        }
    ))
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <a onClick={(e)=>console.log(e.target.innerText)}>{text}</a>,
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Enrolled Courses',
          dataIndex: 'enrolledCourses',
          key: 'enrolledCourses',
          render: text => <Tag color={text > 0 ? "#f50" : '#2db7f5'}>{text}</Tag>,
        },
        {
          title: 'Phone',
          dataIndex: 'phone',
          key: 'phone',
        },
        {
          title: 'Clearance',
          key: 'clearance',
          dataIndex: 'clearance',
          render: clearance => (
            <>
              {clearance?.map(tag => {
                let color = tag === 'admin' ? "warning" : 'success';
                // if (tag === 'user') {
                //   color = 'volcano';
                // }
                return (
                  <Badge variant={color}  key={tag}>
                    {tag.toUpperCase()}
                  </Badge>
                );
              })}
            </>
          ),
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <a >Message {record.name}</a>
              <a>Delete</a>
            </Space>
          ),
        },
      ];
      
    // const data = [
    //     {
    //       key: '1',
    //       name: 'John Brown',
    //       email: 'forhadul@gmail.com',
    //       phone: '01822235000',
    //       clearance: ['user'],
    //     }
    //   ];
    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default InfoTable
