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

  const retrieveMemberList = async () => {
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

  const updateMember = () => {};

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
      <div className={cx('content')}>
        <div className={cx('buttons')}>
          <ButtonExample
            text="getAPI"
            onClick={retrieveMemberList}
          />
          <ButtonExample
            text="postAPI"
            onClick={updateMember}
          />
        </div>
        <div className={cx('contents')}>
          <ExampleGetAPI members={members} />
        </div>
      </div>
    </div>
  );
};

export default ExampleAPI;
export type { Member };
