import { Outlet } from "react-router-dom";
import { Nav } from "./nav";

export const RootLayout: React.FC = () => {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <div className="relative m-auto w-full">
        <Nav />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </main>
  );
};
