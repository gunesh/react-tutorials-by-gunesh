import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import Search from './search';
import HomePage from './list';
import Add from './add';
import { MemoizeExamples } from './Examples/memoexample';
import { userActions } from './red/_actions';

export default function App() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getAll());
  }, []);

  function handleReload(id) {
    dispatch(userActions.getAll());
  }

  function handleDeleteUser(id) {
    dispatch(userActions.delete(id));
  }

  function handleAdd(data) {
    dispatch(userActions.save(data));
  }

  function debounceExample() {
    dispatch(userActions.getAll());
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Search callback={debounceExample} delay={3000} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Add handleAdd={handleAdd} /> <br />
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <MemoizeExamples />
          </Col>
        </Row> */}

        <Row>
          <Col>
            <HomePage
              handleReload={handleReload}
              handleDeleteUser={handleDeleteUser}
              users={users}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
