import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import Search from './search';
import HomePage from './list';
import Add from './add';
import { MemoizeExamples } from './Examples/memoexample';
import { userActions } from './red/_actions';
import { Provider } from 'react-redux';
import { store } from './red/store';

export default function App() {
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
    <Provider store={store}>
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
                  {/* <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                  </NavItem> */}
                  {/* <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">
                      GitHub
                    </NavLink>
                  </NavItem>
                  <UncontrolledDropdown inNavbar nav>
                    <DropdownToggle caret nav>
                      Options
                    </DropdownToggle>
                    <DropdownMenu >
                      <DropdownItem>Option 1</DropdownItem>
                      <DropdownItem>Option 2</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Reset</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown> */}
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
              users={userlist}
            />
          </Col>
        </Row>
      </Container>
      </Provider>
  );
}
