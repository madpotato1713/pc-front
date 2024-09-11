import { useState } from 'react';
import { getMemberList } from '@/service/ExamplesApi';
import { ButtonExample } from '@/components/atoms';
import styles from './ExampleApi.module.scss';
import classNames from 'classnames/bind';
import ExampleGetApi from './ExampleGetApi';
import { MemberProps } from './model/MemberProps';

const cx = classNames.bind(styles);

const ExampleApi = () => {
  const [members, setMembers] = useState<MemberProps[]>([]);
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
    return <div className={cx('loader')}></div>;
  }

  return (
    <div className={cx('content')}>
      <div className={cx('button-box')}>
        <ButtonExample
          text="getApi"
          onClick={retrieveMemberList}
        />
        {/* <ButtonExample
          text="postApi"
          onClick={updateMember}
        /> */}
      </div>
      <div className={cx('contents')}>
        <ExampleGetApi members={members} />
      </div>
    </div>
  );
};

export default ExampleApi;
