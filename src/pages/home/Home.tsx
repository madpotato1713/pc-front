// import { useState } from 'react';
import './Home.scss';

const Home = () => {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="Home">
        <h1>`메인화면(${import.meta.env.VITE_MODE})`</h1>
      </div>
      <p className="read-the-docs">(좌측 네비게이션 메뉴로 테스트)</p>
    </>
  );
};

export default Home;
