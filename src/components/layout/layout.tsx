import { Outlet } from "react-router-dom";
import { HeaderNavigation } from "./header";
import NewClaim from "../claim/new-claim";

export const Layout = () => {
  return (
    <>
      <HeaderNavigation />
      <div className="border-t border-secondary" />
      <NewClaim />
      <main>
        <Outlet />
      </main>
    </>
  );
};