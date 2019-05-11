import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, index, editTask, deleteTask } = this.props;

    return <React.Fragment>
      <li>
        <div className="task__content" data-index={ index } onClick={ editTask } title="click to edit">
        	<h1 className="title">Task { index }</h1>
        	<p className="mainText">
        		{ data }
        	</p>
        </div>
      	<button type="button" className="delete" onClick={ deleteTask }>X</button>
      </li>
    </React.Fragment>
  }
}

export default ListItem;
