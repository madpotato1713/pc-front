import styles from './HeaderExample.module.scss';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const HeaderExample = () => {
  const navigate = useNavigate();

  const gotToHome = () => {
    navigate('/home');
  };

  return (
    <header className={cx('header')}>
      <button onClick={gotToHome}>개발 샘플</button>
    </header>
  );
};

export default HeaderExample;
