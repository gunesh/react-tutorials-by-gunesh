import React, { useEffect, memo } from 'react';
import { Button, Table } from 'reactstrap';

function HomePage(props) {
  const { users } = props;
  return (
    <div className="col-lg-8 offset-lg-2">
      <Button
        color="success"
        onClick={() => {
          props.handleReload();
        }}
      >
        {' '}
        Reload
      </Button>{' '}
      <br />
      <br />
      <Table bordered border="1" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {!users && (
            <tr>
              <td colSpan="3">Loading........</td>
            </tr>
          )}
          {users &&
            users.map((user, index) => (
              <tr key={`ele-${user.id}-${index}`}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {' '}
                  <a
                    onClick={() => {
                      if (confirm('Confirm want to delete!')) {
                        props.handleDeleteUser(user.id);
                      }
                    }}
                    className="text-primary"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default memo(HomePage);
