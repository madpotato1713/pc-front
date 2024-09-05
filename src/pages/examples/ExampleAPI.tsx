import { useState, useEffect } from 'react';
import { getMemberList } from '@/service/ExamplesAPI';
import { ButtonExample } from '@/components/atoms';
import styles from './ExampleAPI.module.scss';
import classNames from 'classnames/bind';
import ExampleGetAPI from './ExampleGetAPI';

const cx = classNames.bind(styles);

// Member 타입 정의
interface Member {
  id: number;
  name: string;
  email: string;
}

const ExampleAPI = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(false); // 초기 로딩 상태를 false로 설정

  const memberList = async () => {
    setLoading(true); // 버튼 클릭 시 로딩 상태로 설정
    try {
      const data = await getMemberList();

      if (data) {
        setMembers(data);
      }
    } catch (error) {
      console.error('Failed to fetch members:', error);
    } finally {
      // 3초 후에 로딩 상태를 false로 설정
      setTimeout(() => {
        setLoading(false);
      }, 600);
    }
  };

  // useEffect(() => {
  //   memberList();
  // }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <h1>Members List</h1>
      <div className={cx('content')}>
        <ButtonExample
          text="getAPI"
          onClick={memberList}
        />
        <div className={cx('contents')}>
          <ExampleGetAPI members={members} />
          {/* <ul>
            {members.map((member) => (
              <li key={member.id}>
                <div>{member.name}</div>
                <div>{member.email}</div>
              </li>
            ))}
          </ul> */}
          {/* <ul className="space-y-2">
            {members.map((member) => (
              <li
                key={member.id}
                className="p-4 bg-white shadow rounded-lg">
                <div className="text-lg font-medium">{member.name}</div>
                <div className="text-gray-600">{member.email}</div>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default ExampleAPI;
export type { Member };
