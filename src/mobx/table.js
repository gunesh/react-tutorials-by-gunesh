import React, { Fragment } from 'react';
import { observer } from 'mobx-react';
import { useMyStore } from './hooks';

const TableData = ({ id, first_name, last_name, email }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{email}</td>
    </tr>
  );
};
const TableHead = () => {
  return (
    <tr>
      <th>ID</th>
      <th>First Name</th>
      <th>Last Name</th>
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
      <table class="table table-striped table-bordered" border="1" width="100%">
        <thead class="thead-dark">
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
