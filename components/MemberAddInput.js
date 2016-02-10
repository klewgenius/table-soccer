import React, { Component, PropTypes } from 'react';


export default class MemberAddInput extends Component {

  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || 'Andrés'
    };
  }

  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      alert(text);
      /*this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({ text: '' });
      }*/
    }
  }
  handleChange(e) {
    this.setState({ text: e.target.value });
  }


  render() {
    return (
      <input class="my-class"
             type='text'
             placeholder={this.props.placeholder}
             autoFocus='true'
             value={this.state.text}
             onChange={::this.handleChange}
             onKeyDown={::this.handleSubmit} />
    );
  }
}
