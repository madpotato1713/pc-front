import Home from "@/pages/home/Home";
import Members from "@/pages/member/Members";

interface RouteConfig {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
  title: string;
}

const routes: RouteConfig[] = [
  {
    path: "/",
    component: Home,
    exact: true,
    title: "메인화면",
  },
  {
    path: "/members",
    component: Members,
    exact: true,
    title: "고객목록",
  },
];

export default routes;
