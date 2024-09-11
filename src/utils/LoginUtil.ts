import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (name: string, value: string) => {
  const options = {
    path: '/',
    maxAge: 3, // seconds
    secure: true // https 연결에만 전송
    // httpOnly: true, // 클라이언트에서 read 불가
  };

  return cookies.set(name, value, { ...options });
};

export const getCookie = (name: string) => {
  console.log(cookies.get(name));
  return cookies.get(name);
};

export const removeCookie = (name: string) => {
  return cookies.remove(name);
};
