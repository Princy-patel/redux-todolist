import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, completedTask, deleteAll } from "../taskSlice";

function ShowTasks() {
  const [selected, setSelected] = useState([]);

  const tasksData = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const deleteTasks = function (id) {
    dispatch(deleteTask(id));
  };

  const completedTasks = function (id) {
    const removeTask = tasksData.map((data) => {
      if (data.id === id) {
        return { ...data, complete: !data.complete };
      }
      return data;
    });

    dispatch(completedTask(removeTask));
  };

  const selectCheckBox = function (id, e) {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelected([...selected, id]);
    } else {
      setSelected((prevData) => {
        return prevData.filter((existedId) => {
          return existedId !== id;
        });
      });
    }
  };

  const deleteAllTask = function () {
    dispatch(deleteAll(selected));
  };

  return (
    <>
      {tasksData.length !== 0 && (
        <>
          <div className="flex flex-col w-full p-4 rounded-lg shadow-2xl bg-slate-50 m-5">
            {tasksData.map((taskData, index) => (
              <div
                key={index}
                className="flex justify-around w-full p-3 m-2 rounded-lg border border-slate-200 items-center"
              >
                <span className="basis-1/4 text-center">
                  <input
                    type="checkbox"
                    onChange={selectCheckBox.bind(null, taskData.id)}
                    checked={selected.includes(taskData.id)}
                    className="h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-900/20 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:scale-105 hover:before:opacity-0 checkbox"
                  />
                </span>
                <span
                  className={`${
                    taskData.complete ? "text-slate-400" : ""
                  } w-1/5 break-words basis-1/4 text-center`}
                >
                  {taskData.tasks}
                </span>
                <span
                  className={`${
                    taskData.complete ? "text-slate-400" : ""
                  } basis-1/4 text-center`}
                >
                  {taskData.time}
                </span>
                <span className="basis-1/4 text-center">
                  <button
                    onClick={completedTasks.bind(null, taskData.id)}
                    className={`text-white rounded-lg px-3 py-2 buttons ${
                      taskData.complete ? "bg-[#4BB543]" : ""
                    }`}
                  >
                    {taskData.complete ? "Completed" : "Pending"}
                  </button>
                </span>
                <span className="basis-1/4 text-center">
                  <button
                    onClick={deleteTasks.bind(null, taskData.id)}
                    className="text-white rounded-lg px-3 py-2 basis-1/4 buttons"
                  >
                    Delete Task
                  </button>
                </span>
              </div>
            ))}
          </div>
          <button
            onClick={deleteAllTask}
            className="m-5 border-solid border-2 py-3 font-semibold px-4 rounded-lg button-border mr-auto"
          >
            CLEAR ALL
          </button>
        </>
      )}
    </>
  );
}

export default ShowTasks;
