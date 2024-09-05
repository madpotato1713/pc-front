import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const Home = () => {
  const navigate = useNavigate();

  const goToExamples = () => {
    navigate('/examples');
  };

  return (
    <div className={cx('home-container')}>
      <header className={cx('header')}>
        <h1 className={cx('title')}>
          LG 유플러스 보안포털({import.meta.env.VITE_MODE} 환경)
        </h1>
        <nav className={cx('nav')}>
          <ul>
            <li>
              <button
                className={cx('nav-button')}
                onClick={goToExamples}>
                개발 샘플
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main className={cx('main-content')}>
        <section
          id={cx('about')}
          className={cx('section')}>
          <h2>About Us</h2>
          <p>LG 유플러스 보안포털 홈페이지 입니다.</p>
          <p>상단 개발 샘플 버튼을 클릭하여 개발 샘플 화면으로 이동합니다.</p>
        </section>
      </main>
      <footer className={cx('footer')}>
        <p>&copy; 2023 Privacy Center. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
