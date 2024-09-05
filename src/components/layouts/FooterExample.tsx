import styles from './FooterExample.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const FooterExample = () => {
  return (
    <footer className={cx('footer')}>
      <p>&copy; 2023 My Website</p>
    </footer>
  );
};

export default FooterExample;
