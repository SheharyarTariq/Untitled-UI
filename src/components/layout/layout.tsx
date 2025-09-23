import { Outlet } from "react-router-dom";
import { HeaderNavigation } from "./header";

export const Layout = () => {
  return (
    <>
      <HeaderNavigation />
      <div className="border-t border-secondary" />
      <main>
        <Outlet />
      </main>
    </>
  );
};