import axios from 'axios';

interface LoginProps {
  id: string;
  password: string;
}

export const doLogin = async (data: LoginProps) => {
  try {
    const response = await axios.post(
      'http://localhost:8080/users/login',
      data
    );

    return response.data;
  } catch (error) {
    console.log('아이디 또는 비밀번호 오류');
    throw error;
  }
};
