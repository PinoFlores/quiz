import { Col, Row } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { NoteCard } from 'app/components/NoteCard';
import Navbar from 'app/components/Navbar';
import { TextArea } from 'app/components/TextArea';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NoteList } from 'app/components/NoteList';

import './index.less';

const Base = props => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Some Containt" />
      </Helmet>
      <div className="container">
        <Navbar />
        <Row>
          <Col span={5}></Col>
          <Col
            span={14}
            style={{ height: '90vh', overflow: 'auto' }}
            className="posts-body padding-sm"
          >
            <input
              type="search"
              className="form-control card"
              placeholder="Buscar Nota o Pregunta"
            />
            <br />
            <br />

            <div className="card padding-lg d-flex margin-bottom-lg">
              <div className="avatar" style={{ width: '10%' }}>
                <Avatar
                  size={42}
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                />
              </div>
              <div className="controls" style={{ width: '90%' }}>
                <TextArea
                  name="new"
                  className="border-0 width-100"
                  placeholder="Crea una Nota o Pregunta aqui..."
                />
                <br />
                <br />
                <div className="d-flex justify-content-end">
                  <button className="btn btn-rounded btn-outline-primary margin-right-md">
                    PRACTICAR
                  </button>
                  <button className="btn btn-rounded btn-primary">
                    CREAR NOTA
                  </button>
                </div>
              </div>
            </div>

            {/*  */}
            <NoteList />
          </Col>
          <Col span={5}></Col>
        </Row>
      </div>
    </>
  );
};

export default Base;
