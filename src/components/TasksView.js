import { secondToTime } from "../helpers/secondsToTime";
import { useTask } from "../Tasks";

export const TaskView = ({ setEditTask }) => {
  
  let tasks = useTask();

  if (!tasks) {
    return (
      <div className="mt-10">
        <h1 className="border-b-2 text-xl">Saved Task</h1>
        No Tasks
      </div>
    );
  }

  return (
    <div className="mt-10 leading-relaxed">
      <h1 className="border-b-2 text-xl">Saved Task</h1>
      {tasks.map((task) => (
        <div key={task.id} className="border-2 my-2 rounded-md p-2">
          <h2>
            <div className="flex justify-between ">
              <span className="font-semibold">name : &nbsp; {task.name}</span>
              <span className="text-blue-700 cursor-pointer" onClick={() => {setEditTask([task]);console.log("task",task)}}>
                Edit
              </span>
            </div>
          </h2>
          <Time time={task.time} />
          <p>
            <span className="font-semibold pt-3">discription: &nbsp;</span>
            {task.discription}
          </p>
        </div>
      ))}
    </div>
  );
};

const Time = ({ time }) => {
  let { hours, minutes, seconds } = secondToTime(time);
  return (
    <h3 className="whitespace-nowrap">
      {" "}
      <span className="font-semibold">Time: &nbsp;</span>{" "}
      {` ${hours}h:${minutes}m:${seconds}s`}
    </h3>
  );
};
