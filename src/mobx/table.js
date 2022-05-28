import React, { Fragment } from 'react';
import { observer } from 'mobx-react';
import { useMyStore } from './hooks';

const TableData = ({ id, name, username, email }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
    </tr>
  );
};
const TableHead = () => {
  return (
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Username</th>
      <th>Email</th>
    </tr>
  );
};

const Table = () => {
  const myStore = useMyStore();
  const itemDetails = myStore.itemDetails;
  return (
    <Fragment>
      <button
        onClick={() => {
          myStore.apiData();
          console.log(myStore);
          console.log('API Response Data', myStore.itemDetails);
        }}
      >
        Get Data From API
      </button>
      <br />
      <table>
        <thead>
          <TableHead />
        </thead>
        <tbody>
          {itemDetails.map((item, index) => {
            return (
              <Fragment>
                <TableData key={`${item.id}-${index}`} {...item} />
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default observer(Table);
