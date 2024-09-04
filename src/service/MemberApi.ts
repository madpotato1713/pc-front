import axios from 'axios';

export async function getMemberList() {
  try {
    const response = await axios.get('http://127.0.0.1:8080/example/list');
    return response.data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}
