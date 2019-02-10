import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
class CreateTask extends Component {

  state = {
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
      this.props.createHandler(this.state.name);
      this.setState({ name: '' });
    }
  }

  render() {
    return(
      <Card style={styles}>
        <CardContent>
          <TextField
            placeholder="Enter task..."
            value={this.state.name}
            onChange={this.handleChange}
            onKeyDown={this.keyDown}
            />
        </CardContent>
      </Card>
    );
  }
}

const styles = {
  marginTop: 12
}

export default CreateTask;
