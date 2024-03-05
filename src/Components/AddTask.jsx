import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../taskSlice";
import { nanoid } from "@reduxjs/toolkit";

function AddTask() {
  const [inputValue, setInputValue] = useState({
    tasks: "",
    time: 0,
    complete: false,
    isChecked: false,
  });

  const dispatch = useDispatch();

  const submitTasks = function () {
    const { tasks, time, complete, isChecked } = inputValue;
    dispatch(
      addTask({
        id: nanoid(),
        tasks,
        time,
        complete,
        isChecked,
      })
    );

    setInputValue({ tasks: "", time: "" });
  };
  return (
    <>
      <h1 className="text-4xl font-semibold m-5 title">Just do it!</h1>

      <div className="m-auto mx-3">
        <input
          type="text"
          placeholder="Add task"
          name="Add_task"
          onChange={(e) =>
            setInputValue({ ...inputValue, tasks: e.target.value })
          }
          className="text-left p-3 m-3 rounded-lg w-full"
          value={inputValue.tasks}
        />

        <input
          type="number"
          placeholder="Enter time"
          name="time"
          onChange={(e) =>
            setInputValue({ ...inputValue, time: e.target.value })
          }
          className="text-left p-3 m-3 rounded-lg w-full"
          value={inputValue.time}
        />

        <div className="w-full text-right">
          <button
            onClick={submitTasks}
            className="px-4 py-3 m-3 font-semibold border-solid border-2 rounded-lg button-border"
          >
            I Got This!
          </button>
        </div>
      </div>
    </>
  );
}

export default AddTask;
