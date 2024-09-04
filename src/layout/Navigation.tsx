import { NavLink } from "react-router-dom";
import routes from "@/routes";

function Navigation() {
  return (
    <div className="hidden w-64 shrink-0 border-r bg-gray-100 dark:bg-gray-800 md:block">
      <div className="h-full overflow-y-auto p-4">
        <nav className="space-y-2">
          {routes.map((route) => (
            <NavLink
              key={route.path}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white"
                    : "text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
                }`
              }
              to={route.path}
            >
              {route.path === "/" ? "메인화면" : route.title}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
