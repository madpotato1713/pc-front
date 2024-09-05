import axios from 'axios';

export async function getMemberList() {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    return response.data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}
