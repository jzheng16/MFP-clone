import React from 'react';

const taskForm = () => {
  constructor(props){
    super(props);
    this.state = {
      task: ''
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name: e.target.value]})
  }
  return (
    <form> 
      <div>
        <label> Add a task </label>
        <br/>
        <input type='text' name='task' onChange={this.onChange} value={this.state.task}/> 
      </div>
      </form>
  )
}