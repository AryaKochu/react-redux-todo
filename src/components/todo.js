import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';


class Todo extends Component {
  componentDidMount() {
    this.props.addTodo('Buy milk', true); 
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.todo.map((t, id) => {
              const key = `${t.tile} ${id}`;
              return <li key={key}>{t.title}</li>;
            })
          }
        </ul>
      </div>
    );
  }
}

const stateToProps = state => ({
  todo: state.todo,
});

const dispatchToProps = {
  addTodo,
};

export default connect(stateToProps, dispatchToProps)(Todo);
