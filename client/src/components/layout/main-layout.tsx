import { Outlet } from "react-router";
import Header from "../header";

function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default MainLayout;
