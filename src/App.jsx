import "./App.css";
import AddTask from "./Components/AddTask";
import ShowTasks from "./Components/ShowTasks";
import Siderbar from "./global/Siderbar";

function App() {
  return (
    <>
      <div className="flex items-center m-3">
        <Siderbar />
        <div className="rounded-2xl p-9 w-1/2 main">
          <AddTask />
          <ShowTasks />
        </div>
      </div>
    </>
  );
}

export default App;
