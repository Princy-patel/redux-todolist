import "./App.css";
import AddTask from "./Components/AddTask";
import ShowTasks from "./Components/ShowTasks";

function App() {
  return (
    <div className="flex flex-col justify-center items-center m-3">
      <div className="rounded-2xl p-9 w-1/2 main">
        <AddTask />
        <ShowTasks />
      </div>
    </div>
  );
}

export default App;
