// helpers
import { localStorageSet } from "../helpers/localStorageOps";

export function tasksReducers(tasks, action) {

  console.log(tasks,action);
    switch (action.type) {

    case "add": {

      let newTask = {
        id: tasks.length + 1,
        time: action.time,
        name: action.name,
        discription: action.discription,
      };

      const updatedTasks = [...tasks, newTask];
      localStorageSet("tasks", updatedTasks);

      return updatedTasks;
    }

    case "edit" : {
      const updatedTasks = tasks.map((task)=>{
        if(action.id === task.id){
          console.log("updation", {...task , name:action.name ,discription:action.discription })
          return {...task , name:action.name ,discription:action.discription }
        }else{
          return task
        }
      })
      console.log(updatedTasks);
      localStorageSet("tasks", updatedTasks);
      return updatedTasks;

    }

    default:{
        return tasks;
    }

  }
}
