import styles from './ExamplesHome.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ExamplesHome = () => {
  return (
    <main className={cx('home')}>
      <p>개발 샘플 입니다.</p>
      <p>좌측 메뉴를 클릭하여 각 예제를 확인할 수 있습니다.</p>
    </main>
    // <>
    //   <div className="ExamplesHome">
    //     <h1>메인화면({import.meta.env.VITE_MODE})</h1>
    //   </div>
    //   <p className="read-the-docs">(좌측 네비게이션 메뉴로 테스트)</p>
    // </>
  );
};

export default ExamplesHome;
