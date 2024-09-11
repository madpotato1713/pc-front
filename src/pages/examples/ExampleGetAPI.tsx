import { MemberProps } from './model/MemberProps';
import styles from './ExampleGetApi.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface ExampleGetApiProps {
  members: MemberProps[];
}

const ExampleGetApi = (props: ExampleGetApiProps) => {
  const { members } = props;

  return (
    <div className={cx('table-container')}>
      <table className={cx('data-table')}>
        <thead>
          <tr>
            <th>이름</th>
            <th>직업</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index}>
              <td>{member.name}</td>
              <td>{member.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExampleGetApi;
