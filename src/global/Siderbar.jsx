import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

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
