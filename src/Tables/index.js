import React, { useState } from 'react';
// import MaterialTable from 'material-table';
// import MaterialTable from 'material-table';

import MaterialTable from 'material-table';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import SaveIcon from '@material-ui/icons/Save';
import { Button } from '@material-ui/core';

const columns = [
  { title: 'Name', field: 'name' },
  { title: 'Surname', field: 'surname' },
  { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
];

const data = [
  { name: 'Mohammad', surname: 'Faisal', birthYear: 1995 },
  { name: 'Gunesh', surname: 'A', birthYear: 1222 },
  { name: 'Nayeem Raihan ', surname: 'Shuvo', birthYear: 1994 },
];
const BasicTable = () => {
  return <MaterialTable title="Basic Table" columns={columns} data={data} />;
};

const TableExample = () => {
  const [dataStore, setDataStore] = useState([
    { name: 'Jon', job: 'Software Dev', age: 29 },
  ]);

  return (
    <div className="App">
      <div style={{ maxWidth: '100%', paddingTop: '12px' }}>
        <MaterialTable
          columns={[
            {
              title: 'Name',
              field: 'name',
              headerStyle: {
                backgroundColor: 'green',
              },
            },
            {
              title: 'Occupation',
              field: 'job',
              headerStyle: {
                backgroundColor: 'blue',
              },
            },
            {
              title: 'Age',
              field: 'age',
              type: 'numeric',
              headerStyle: {
                backgroundColor: 'red',
              },
            },
          ]}
          data={dataStore}
          title="Material-Table Demo"
          icons={{
            Clear: (props) => <DeleteIcon />,
            Search: (props) => <SearchIcon />,
            ResetSearch: (props) => <DeleteIcon />,
          }}
          actions={[
            {
              icon: () => <SaveIcon />,
              tooltip: 'Save User',
              onClick: (event, rowData) => alert('You saved ' + rowData.name),
            },
          ]}
          components={{
            Action: (props) => (
              <Button
                onClick={(event) => props.action.onClick(event, props.data)}
                color="primary"
                variant="text"
                style={{ textTransform: 'none' }}
                size="small"
              >
                Save
              </Button>
            ),
          }}
          options={{
            headerStyle: {
              backgroundColor: '#01579b',
              color: '#FFF',
            },
          }}
        />
      </div>
    </div>
  );
};

export { TableExample };
