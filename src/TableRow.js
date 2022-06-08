import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    const { id, name } = this.props.obj;
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
      </tr>
    );
  }
}

export default TableRow;
