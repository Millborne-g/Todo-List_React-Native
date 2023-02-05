import React from 'react';
import { TouchableOpacity } from 'react-native';
import Task from './Task';

const TaskList = ({taskList,completeTask}) => {

  return (
    <>
      {
        taskList.map((item, index) =>{
          return (
            <TouchableOpacity onPress={()=>completeTask(index)}>
              <Task key={index} text={item}/>
            </TouchableOpacity>
            
          )
        })
      }
    </>
  )
}

export default TaskList