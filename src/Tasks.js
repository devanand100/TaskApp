import { useState, useEffect, useReducer } from "react";
import { createContext, useContext } from "react";
import { tasksReducers } from "./store/taskReducers";
// components
import Clock from "./components/Clock";
import { SaveForm } from "./components/saveForm";
import { TaskView } from "./components/TasksView";

// elements
import { Modal } from "./elements/modal";
import Button from "./elements/button";

// helpers
import { localStorageSet } from "./helpers/localStorageOps";
import { localStorageGet } from "./helpers/localStorageOps";

// styles
import "./Tasks.css";

const TasksContext = createContext(null);
const TasksReducerContext = createContext(null);

export default function HomePage() {
  const [tasks, dispatch] = useReducer(
    tasksReducers,
    localStorageGet("tasks") ?? []
  );
  const [time, setTime] = useState(Number(localStorageGet("time")) ?? 0);
  const [active, setActive] = useState(false);
  const [save, setSave] = useState(false);
  const [editTask, setEditTask] = useState([]);

  useEffect(() => {
    if (time > 0) {
      localStorageSet("time", time);
    }
  }, [time]);

  useEffect(() => {
    let timer;

    if (active) {
      timer = setInterval(() => setTime((time) => time + 1), 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [active]);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksReducerContext.Provider value={dispatch}>
        {save && (
          <Modal title="Save Task" onClose={() => setSave(false)}>
            <SaveForm
              time={time}
              onClose={() => setSave(false)}
              setTime={setTime}
              setActive={setActive}
            />
          </Modal>
        )}
        {editTask.length > 0 && (
          <Modal title="Edit Task" onClose={() => setEditTask([])}>
            <SaveForm
              task={editTask}
              onClose={() => setEditTask([])}
              setTime={setTime}
              setActive={setActive}
            />
          </Modal>
        )}
        <div className="relative w-full">
          <div className="text-xl text-center">TaskFlow</div>
          <hr />
            <div className="relative">

            <Clock time={time} />
            <div className="absolute btn-group">
              <Button onClick={startTimer} disabled={active} text="Start" />
              <Button onClick={stopTimer} disabled={!active} text="Pause" />
              <Button
                disabled={time < 1}
                text="Save"
                onClick={() => {
                  setSave(true);
                  stopTimer();
                }}
              />
            </div>
          </div>
          </div>
        </div>
        <TaskView  setEditTask={setEditTask}/>
      </TasksReducerContext.Provider>
    </TasksContext.Provider>
  );

  function startTimer() {
    setActive(true);
  }

  function stopTimer() {
    setActive(false);
  }
}

export function useTask() {
  return useContext(TasksContext);
}

export function useTaskReducers() {
  return useContext(TasksReducerContext);
}
