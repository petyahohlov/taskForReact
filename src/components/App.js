import React, {Component} from 'react';
import MainInput from './MainInput/MainInput.js';
import TaskList from './TaskList/TaskList.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    	typeButton: "add",
    	data: [],
      editIndex: 0
    }

    this.clickButton = this.clickButton.bind(this);
    this.editTask = this.editTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  editTask(event) {
    let elem = event.target,
        index = 0;
    const text = document.getElementById('field');

    if(elem.className !== "task__content") {
      elem = elem.parentElement;
    }
    index = elem.dataset.index;
    let list = this.state.data;

    text.value = list[index - 1];

    this.setState({
      typeButton: "edit",
      editIndex: index - 1
    })
  }

  deleteTask(event) {
    const elem = event.target,
          index = elem.dataset.index;
    let list = this.state.data;

    list.splice( index - 1, 1);

    this.setState({
      typeButton: "edit",
      data: list
    })
  }

  clickButton() {
  	const text = document.getElementById('field');
    
    let list = this.state.data;
    if(this.state.typeButton === "add") {
      list.reverse().push(text.value);

    	this.setState({
        data: list.reverse()
      })
    } else if(this.state.typeButton === "edit") {
      list[this.state.editIndex] = text.value;

      this.setState({
        data: list,
        typeButton: "add"
      })
    }

    text.value = '';
  }

  render() {
    return <React.Fragment>
    	<MainInput
    		textButton={ this.state.typeButton }
    		clickButton={ this.clickButton }
    	/>
    	<TaskList
        data={ this.state.data }
        editTask={ this.editTask }
        deleteTask={ this.deleteTask }
      />
    </React.Fragment>
  }
}

export default App;
