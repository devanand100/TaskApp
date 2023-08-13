import { useState, useEffect } from "react";
import { useTaskReducers } from "../Tasks";

// components
import Button from "../elements/button";

export const SaveForm = ({ onClose, time, setTime, setActive, task = [] }) => {
  const [taskName, setTaskName] = useState(task[0]?.name ?? "");
  const [taskDescription, settaskDescription] = useState(
    task[0]?.discription ?? ""
  );
  const [error, seError] = useState("");
  const dispatch = useTaskReducers();

  function handleSave() {
    if (taskDescription.length <= 0 || taskName.length <= 0) {
      seError("all input fields should be filled");
      return;
    }

    let action = {
      type: "add",
      name: taskName,
      discription: taskDescription,
      time: time,
    };
    let editAction = {
      id: task[0]?.id,
      type: "edit",
      name: taskName,
      discription: taskDescription,
      time: task[0]?.time,
    };
    onClose();
    setTime(() => 0);

    if (task?.length > 0) {
      dispatch(editAction);
    } else {
      dispatch(action);
    }
  }

  useEffect(() => {
    if (taskName.length > 0 && taskDescription.length > 0) {
      seError("");
    }
    // else{
    //   seError("all input fields should be filled");
    // }
  }, [taskName, taskDescription]);

  useEffect(() => {
    setActive(false);
  }, []);

  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col">
      <input
        className="p-2 my-2 border-solid border-2"
        type="text"
        placeholder="enter Title of Task"
        value={taskName}
        onChange={(e) => {console.log(e) ;setTaskName(e.target.value)}}
      />

      <textarea
        placeholder="type description of task"
        className="p-2 my-2 border-solid border-2"
        value={taskDescription}
        onChange={(e) => settaskDescription(e.target.value)}
      />

      <div className="self-end flex gap-2">
        <Button
          type="button"
          text="close"
          classes={`border-2 border-solid border-slate-500 px-5 py-2 rounded-full  bg-white text-gray-500`}
          onClick={() => {
            onClose();
            setActive(true);
          }}
        />
        <Button onClick={handleSave} text="save" />
      </div>
      {error.length > 0 && error }
    </form>
  );
};
