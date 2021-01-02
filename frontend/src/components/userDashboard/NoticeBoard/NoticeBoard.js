import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const NoticeBoard = () => {
    const {user} = useSelector(state => state.userReducer);
    return (
        <div className="notice-board">
            <div className="notice-board__heading">
                Hello, <strong>{user.username}</strong>
            </div>
            <div className="notice-board__body">
                Thanks for being with us! We will contact with you about your progress and all notice will be placed here for you. Keep learning!
            </div>
        </div>
    )
}

export default NoticeBoard
