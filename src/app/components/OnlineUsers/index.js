import React from 'react';
import PropTypes from 'prop-types';
import { getMockUsers } from './mockUsers';
import { Badge } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';

import './index.less';

const OnlineUsers = props => {
  const users = getMockUsers(30, 'random');

  return (
    <div className="online-users-container">
      {users.map(user => {
        return (
          <button className="online-user-btn reset-btn">
            <Badge
              size={32}
              offset={[-5, 38]}
              status="success"
              className="user-item"
            >
              <Avatar size={42} src={user.avatar} />
            </Badge>
          </button>
        );
      })}
    </div>
  );
};

export default OnlineUsers;
