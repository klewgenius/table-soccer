import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export default class AvailableUsers extends Component {

  constructor(props, context) {
    super(props, context);
    this.availableUsers = this.props.listUsers || [];
  }

  render() {
    return (
      <ul className='todo-list'>
      {this.availableUsers.map(function(value){
            return <li>{value}</li>;
          })}
      </ul>
    );
  }
}


function mapState(state) {
  return {
    listUsers: state.get('initialEntries')
  };
}


export default connect(mapState)(AvailableUsers);