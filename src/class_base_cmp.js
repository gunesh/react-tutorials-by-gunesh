import React, { Component } from 'react';
import { connect } from 'react-redux';

class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: '',
        mark: '',
      },
    };
  }

  onChangeHandler = (e) => {
    this.setState({
      ...this.state,
      fields: {
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    const { name, mark } = this.state.fields;

    return (
      <>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            this.onChangeHandler(e);
          }}
          placeholder="Enter Student Name"
        />
        <input
          type="text"
          name="mark"
          value={mark}
          onChange={(e) => {
            this.onChangeHandler(e);
          }}
          placeholder="Enter Student Mark"
        />
        <button
          onClick={() => {
            this.props.onGo(mark, name);
          }}
        >
          Save Data
        </button>

        <br />

        {this.props.items &&
          this.props.items.map((item) => {
            return (
              <>
                {' '}
                <b>
                  My List :{item.name}--{item.mark}{' '}
                  <button
                    onClick={() => {
                      this.props.onDelete(item.name);
                    }}
                  >
                    Delete User
                  </button>
                </b>{' '}
                <br />
              </>
            );
          })}
      </>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    items: state.users.items,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGo: (mark, name) =>
      dispatch({
        type: 'ADD_USER',
        payload: { mark, name },
      }),
    onDelete: (name) =>
      dispatch({
        type: 'DELETE_USER',
        payload: name,
      }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppClass);
