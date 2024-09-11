import { setCookie, getCookie, removeCookie } from '@/utils/LoginUtil';

// const loginCheck = async (setLoginStatus) => {
//   let token = getCookie('TEST_TOKEN');
// };

const Login = () => {
  return (
    <div>
      <button onClick={() => setCookie('cookie_test', 'testValue')}>
        쿠키 설정
      </button>
      <button onClick={() => getCookie('cookie_test')}>쿠키 확인</button>
      <button onClick={() => removeCookie('cookie_test')}>쿠키 제거</button>
    </div>
  );
};

export default Login;

// import { useEffect, useState } from 'react';
// import { useCookies } from 'react-cookie';
// // import { setCookie, getCookie, removeCookie } from '@/utils/LoginUtil';

// const Login = () => {
//   const [cookies, setCookie, removeCookie] = useCookies(['testCookie']);
//   const [token, setToken] = useState(cookies.testCookie || null);

//   useEffect(() => {
//     const storedToken = cookies.testCookie;
//     if (storedToken) {
//       setToken(storedToken);
//     }
//   }, [cookies.testCookie]);

//   const handleLogin = () => {
//     const receivedToken = 'received_token_from_oauth';

//     setCookie('testCookie', receivedToken, {
//       path: '/',
//       maxAge: 2, // seconds
//       secure: true // https 연결에만 전송
//       // httpOnly: true, // 클라이언트에서 read 불가
//     });

//     setToken(receivedToken);
//   };

//   const handleCheck = () => {
//     console.log(cookies);
//   };

//   const handleLogout = () => {
//     removeCookie('testCookie');
//     setToken(null);
//   };

//   return (
//     <div>
//       {token ? <p>login</p> : <p>logout</p>}
//       <button onClick={handleLogin}>로그인</button>
//       <button onClick={handleCheck}>쿠키 확인</button>
//       <button onClick={handleLogout}>로그아웃</button>
//     </div>
//   );
// };

// export default Login;
