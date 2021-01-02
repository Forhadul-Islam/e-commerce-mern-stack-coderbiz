import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ChatRoom from './chatRoom/ChatRoom';
import CreateReview from './CreateReview/CreateReview';
import MyCourses from './myCourses/MyCourses';
import NoticeBoard from './NoticeBoard/NoticeBoard';
import Profile from './profile/Profile';



const routes = [
    {
        path: "/my-account",
        exact: true,
        main: () => <Profile/>
    },
    {
        path: "/my-account/profile",
        exact: true,
        main: () => <Profile/>
    },
    {
        path: "/my-account/courses",
        exact: true,
        main: () => <MyCourses />
    },
    {
        path: "/my-account/review",
        main: () => <CreateReview />
    },
    {
        path: "/my-account/notice",
        main: () => <NoticeBoard />
    },
    {
        path: "/my-account/chat",
        main: () => <ChatRoom />
    }
  ];

const UserContainer = () => {
    return (
        <div>
             <Switch>
                {routes.map((route, index) => (
                    // Render more <Route>s with the same paths as
                    // above, but different components this time.
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<route.main />}
                    />
                ))}
            </Switch>
        </div>
    )
}

export default UserContainer
