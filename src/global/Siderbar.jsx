import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import AddTask from "../Components/AddTask";
import ShowTasks from "../Components/ShowTasks";

function Siderbar() {
  return (
    <div style={{ float: "left", height: "100vh" }}>
      <Sidebar>
        <Menu>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
          <MenuItem> Examples</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default Siderbar;
