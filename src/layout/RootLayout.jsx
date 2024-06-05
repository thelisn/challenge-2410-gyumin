import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <Outlet />
    </div>
  );
}

export default RootLayout;
