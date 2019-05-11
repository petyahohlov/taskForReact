import React, { Component } from 'react';
import Listitem from '../ListItem/ListItem.js'

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.getListItems = this.getListItems.bind(this);
  }

  getListItems() {
  	let { data, editTask, deleteTask } = this.props;
  	let listItems = data.map((text, index)=>
  			<Listitem
  				data={ text }
          index={ index + 1 }
          editTask={ editTask }
          deleteTask={ deleteTask }
  			/>
  		);
    return listItems;
  }

  render() {
    return <React.Fragment>
    	<ul>
    		{ this.getListItems() }
    	</ul>
    </React.Fragment>
  }
}

export default TaskList;
