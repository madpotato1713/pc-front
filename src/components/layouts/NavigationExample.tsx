import { NavLink } from 'react-router-dom';
import routes from '@/routes';
import styles from './NavigationExample.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const NavigationExample = () => {
  return (
    <nav className={cx('navigation')}>
      {routes.examples.map((route) => (
        <NavLink
          key={route.path}
          className={({ isActive }) =>
            cx(
              'flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors',
              {
                'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white':
                  isActive,
                'text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700':
                  !isActive
              }
            )
          }
          // className={({ isActive }) =>
          //   `flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
          //     isActive
          //       ? 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white'
          //       : 'text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700'
          //   } `
          // }
          to={route.path}
          end>
          {route.title}
        </NavLink>
      ))}
      {/* <ul>
        <li>
          <NavLink
            to="/"
            end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul> */}
    </nav>
  );

  // return (
  //   <div className="hidden w-64 shrink-0 border-r bg-gray-100 dark:bg-gray-800 md:block">
  //     <div className="h-full overflow-y-auto p-4">
  //       <nav className="space-y-2">
  //         {routes.examples.map((route) => (
  //           <NavLink
  //             key={route.path}
  //             className={({ isActive }) =>
  //               `flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
  //                 isActive
  //                   ? 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white'
  //                   : 'text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700'
  //               } `
  //             }
  //             to={route.path}>
  //             {route.title}
  //           </NavLink>
  //         ))}
  //       </nav>
  //     </div>
  //   </div>
  // );
};

export default NavigationExample;
