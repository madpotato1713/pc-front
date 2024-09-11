import axios from 'axios';
import { MemberProps } from '@/pages/examples/model/MemberProps';

export const getMemberList = async () => {
  try {
    const response = await axios.get(
      // 'https://jsonplaceholder.typicode.com/users'
      'http://localhost:8080/example/member'
    );
    return response.data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export const createMember = async (memberData: MemberProps) => {
  try {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/users',
      memberData
    );
    return response.data;
  } catch (error) {
    console.error('Post error:', error);
    throw error;
  }
};
