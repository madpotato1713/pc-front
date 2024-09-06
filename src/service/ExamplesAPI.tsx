import axios from 'axios';
import { Member } from '@/pages/examples/ExampleAPI';

export async function getMemberList() {
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
}

export async function createMember(memberData: Member) {
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
}
