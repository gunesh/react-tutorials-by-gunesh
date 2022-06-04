import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavbarText,
} from 'reactstrap';
import Search from './Test/search';
import HomePage from './Test/list';
import Add from './Test/add';
import { userActions } from './redux/_actions';

function ExternalAppStore() {
  const users = useSelector((state) => state.users);
  const [userlist, setUserList] = useState(users.items);
  const [toggle, setToggle] = useState(false);
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
  function onChangeSearch(value) {
    if (value !== '') {
      var tmpArr = users.items;
      var newArr = tmpArr.filter((item) => {
        var keyword = value.toLowerCase();
        var name = item.name.toLowerCase();
        var email = item.email.toLowerCase();
        if (email.indexOf(keyword) > -1 || name.indexOf(keyword) > -1) {
          return item;
        }
      });
    } else {
      var newArr = users.items;
    }
    setUserList(newArr);
  }

  return (
    <Container>
      <Row>
        <Col>
          <div>
            <Navbar color="light" expand="md" light>
              <NavbarBrand href="/">reactstrap</NavbarBrand>
              <NavbarToggler
                onClick={() => {
                  setToggle(!toggle);
                }}
              />
              <Collapse isOpen={toggle} navbar={true}>
                <NavbarText>Simple Text</NavbarText>
              </Collapse>
            </Navbar>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Search
            callback={debounceExample}
            onChange={onChangeSearch}
            delay={3000}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Add handleAdd={handleAdd} /> <br />
        </Col>
      </Row>

      <Row>
        <Col>
          <HomePage
            handleReload={handleReload}
            handleDeleteUser={handleDeleteUser}
            users={userlist}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ExternalAppStore;
