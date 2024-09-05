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
    <div>
      <header className={cx('header')}>
        <button onClick={gotToHome}>개발 샘플</button>
        <p>글자를 클릭하면 홈 화면으로 돌아갑니다.</p>
      </header>
    </div>
  );
};

export default HeaderExample;
