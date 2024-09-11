import { NavLink } from 'react-router-dom';
import routeInfo from '@/router/RouterInfo';
import styles from './NavigationExample.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const NavigationExample = () => {
  return (
    <nav className={cx('navigation')}>
      {routeInfo.map((route) => (
        <NavLink
          key={route.path}
          className={({ isActive }) =>
            cx('box', {
              active: isActive,
              disable: !isActive
            })
          }
          to={route.path}
          end>
          {route.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavigationExample;
