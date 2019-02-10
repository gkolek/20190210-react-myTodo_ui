import React from 'react';
import List from '@material-ui/core/List';

import Task from './Task';

const TaskContainer = (props) => (
  <List>
    {props.todo.map(task => (
      <Task
        key={`t-${task.id}`}
        task={task}
        handleChange={(event) => props.handleChange(event, task.id)}
        handleRemove={() => props.handleRemove(task.id)}
        updateHandler={(newName) => props.updateHandler(newName, task.id)}
      />
    ))}
  </List>
);

export default TaskContainer;

// class TaskContainer extends Component {

//   render() {
//     return (
//       <div>
//         {this.props.todo.map(task => (
//           <Task
//             key={`t-${task.id}`}
//             task={task}
//             handleChange={(event) => this.props.handleChange(event, task.id)}
//           />
//         ))}
//       </div>
//     );
//   }
// }

// export default TaskContainer;
