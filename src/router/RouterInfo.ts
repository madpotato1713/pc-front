import {
  ExamplesHome,
  ExampleApi,
  ExamplePopup,
  ExamplePaging
} from '@/pages/examples';

interface RouteConfig {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
  title: string;
}

const routeInfo: RouteConfig[] = [
  {
    path: '/examples',
    component: ExamplesHome,
    exact: true,
    title: '예제메인화면'
  },
  {
    path: '/examples/api',
    component: ExampleApi,
    exact: true,
    title: 'API 호출'
  },
  {
    path: '/examples/popup',
    component: ExamplePopup,
    exact: true,
    title: '팝업'
  },
  {
    path: '/examples/paging',
    component: ExamplePaging,
    exact: true,
    title: '페이징'
  }
];

export default routeInfo;
