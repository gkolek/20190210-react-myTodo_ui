import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';

class Task extends Component {

  state = {
    editMode: false,
    name: ''
  }

  handleChange = (event) => {
    this.setState({ name:  event.target.value });
  }

  keyDown = (event) => {
    if (!this.state.name) {
      return;
    }
    if (event.keyCode === 13) {
      this.props.updateHandler(this.state.name);
      this.setState({ name: '', editMode: false });
    } else if (event.keyCode === 27) {
      this.setState({ editMode: false });
    }
  }

  handleClick = () => {
    this.setState({ editMode: true, name: this.props.task.name });
  }

  renderTask() {
    if (this.state.editMode) {
      return (
        <ListItemText>
          <TextField
            fullWidth
            defaultValue={this.props.task.name}
            onChange={this.handleChange}
            onKeyDown={this.keyDown}/>
        </ListItemText>
      );
    }
    return <ListItemText onClick={this.handleClick}>{this.props.task.name}</ListItemText>;
  }

  render () {
    // this.props.task = { id: 1, name: 'Odkurzyc', completed: false }
    const styles = this.props.task.completed
    ? { textDecoration: 'line-through' }
    : {};
    return (
      <ListItem style={styles}>
        <Checkbox
          checked={this.props.task.completed}
          onChange={this.props.handleChange}
        />
        {this.renderTask()}
        <Button variant="contained" color="secondary" onClick={this.props.handleRemove}>
          <DeleteIcon />
        </Button>
      </ListItem>
    );
  }
}

export default Task;
