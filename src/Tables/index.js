import React from 'react';
// import MaterialTable from 'material-table';
import MaterialTable from "@material-table/core";

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
export const BasicTable = () => {
  return <MaterialTable title="Basic Table" columns={columns} data={data} />;
};

export { BasicTable };
