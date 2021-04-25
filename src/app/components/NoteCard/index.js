import React from 'react';

import { Badge, Avatar } from 'antd';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

import './index.less';

export const NoteCard = ({ note }) => {
  console.log(note.creator);

  if (Array.isArray(note.creator)) {
    const creator = note.creator;
    note = { ...note, creator: creator[0] };
  }

  return (
    <div className="card padding-lg margin-bottom-lg" key={note.id}>
      <div className="card-header width-100 d-flex justify-content-between">
        <div className="user-info d-flex align-items-center">
          <div className="user-avatar">
            <Badge>
              <Avatar size={52} src={note.creator.avatar} />
            </Badge>
          </div>
          <div className="info-text margin-md">
            <h3 className="username">{note.creator.fullname}</h3>
            <span className="user-id color-primary">
              {note.creator.username}
            </span>
          </div>
        </div>
        <div className="card-header-actions">
          <button className="btn btn-secondary border-0 padding-sm margin-right-md">
            crear Pregunta
          </button>
          <button className="btn btn-secondary border-0 padding-sm">
            Clonar
          </button>
          <button className="reset-btn">
            <MoreVertIcon />
          </button>
        </div>
      </div>
      <div className="card-body width-100">
        <div className="text" style={{ fontSize: '1.4rem' }}>
          {note.text}
        </div>
        <div className="categories">
          {note.categories.map((text, key) => {
            return (
              <a href="#" style={{ fontSize: '1rem', marginRight: '0.7rem' }}>
                #{text}
              </a>
            );
          })}
        </div>
      </div>
      <div className="card-footer width-100 margin-top-lg d-flex justify-content-between">
        <div className="note-social-actions">
          <button className="btn btn-secondary border-0 padding-sm margin-right-md ">
            <div className="d-flex align-items-center">
              <ThumbUpAltOutlinedIcon />
              &nbsp; Recomendar
            </div>
          </button>
          <button className="btn btn-secondary border-0 padding-sm margin-right-md">
            <div className="d-flex align-items-center">
              <ChatOutlinedIcon />
              &nbsp; Comentar
            </div>
          </button>
          <button className="btn btn-secondary border-0 padding-sm">
            <div className="d-flex align-items-center">
              <ShareOutlinedIcon />
              &nbsp; Compartir
            </div>
          </button>
        </div>
        <div className="colaboratiors">
          <Avatar.Group>
            {note.contributors.map(contributor => {
              return <Avatar size={32} src={contributor.avatar} />;
            })}
          </Avatar.Group>
        </div>
      </div>
    </div>
  );
};
