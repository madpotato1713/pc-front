import { ExamplesHome, ExampleAPI, ExamplePopup } from '@/pages/examples';
// import { Home } from '@/pages';

interface RouteConfig {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
  title: string;
}

const routes: { examples: RouteConfig[] } = {
  examples: [
    {
      path: '/examples',
      component: ExamplesHome,
      exact: true,
      title: '예제메인화면'
    },
    {
      path: '/examples/api',
      component: ExampleAPI,
      exact: true,
      title: 'API 호출'
    },
    {
      path: '/examples/popup',
      component: ExamplePopup,
      exact: true,
      title: '팝업'
    }
  ]
};

// const routes: RouteConfig[] = [
//   {
//     path: '/',
//     component: Home,
//     exact: true,
//     title: '메인화면'
//   },
//   {
//     path: '/members',
//     component: Members,
//     exact: true,
//     title: '고객목록'
//   },
//   {
//     path: '/popup',
//     component: Examples,
//     exact: true,
//     title: '샘플'
//   }
// ];

export default routes;
