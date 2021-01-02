import React from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import profileImage from '../../../images/profile.png';
import ProfileUpdaate from './ProfileUpdaate';
import { Typography } from 'antd';

const { Text } = Typography;

const Profile = () => {
    const {user} = useSelector(state => state.userReducer);
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="profile">
            <div className="profile__top">
                <img className="profile__top--image" src={profileImage} alt="profile" />
            </div>
            <div className="profile__description">
                <div className="profile__description--item">
                    <strong>Username: </strong> 
                    {user?.username} 
                    <BiEditAlt onClick={() => setModalShow(true)} className="profile__description--item-edit" />
                </div>
                <div className="profile__description--item">
                    <strong>Phone: </strong> 
                    {user.phone? user.phone : 'set a phone'} 
                    <BiEditAlt  onClick={() => setModalShow(true)} className="profile__description--item-edit" />
                    <ProfileUpdaate  
                        show={modalShow}
                        onHide={() => setModalShow(false)} 
                        username={user.username}
                        phone ={user.phone? user.phone : 'not set'} 
                    />
                </div>
                <div className="profile__description--item">
                    <strong>Email: </strong> {user?.email}
                </div>
                <div className="profile__description--item">
                    <strong>Total courses: </strong> 
                    {user?.coursesOwned?.length}
                </div>
            </div>
        </div>
    )
}

export default Profile
