import React from 'react';

import { Badge, Col, Row } from 'antd';
import Logo from 'app/Assets/Logo.svg';
import { MessageOutlined } from '@ant-design/icons';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

import './index.less';
import OnlineUsers from '../OnlineUsers';
import Avatar from 'antd/lib/avatar/avatar';

const Navbar = props => {
  return (
    <div className="navbar">
      <Row gutter={16}>
        <Col span={5} className="d-flex f-column justify-content-center">
          <a href="">
            <img className="navbar-quiz-logo" src={Logo} alt="logo-quiz" />
          </a>
        </Col>
        <Col span={14}>
          <OnlineUsers />
        </Col>
        <Col
          span={5}
          className="d-flex align-items-center justify-content-end "
        >
          <div className="messages-icon-container">
            <button className="reset-btn">
              <MailOutlineIcon fontSize="large" />
            </button>
          </div>
          <div className="notifications-icon-container">
            <button className="reset-btn">
              <NotificationsNoneIcon fontSize="large" />
            </button>
          </div>
          <div className="user-avatar-settings-menu">
            <button className="reset-btn">
              <Avatar src="https://randomuser.me/api/portraits/men/75.jpg" />
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Navbar;
