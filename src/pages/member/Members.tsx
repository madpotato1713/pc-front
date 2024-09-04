import React, { useEffect, useState } from 'react';
// import { getMemberList } from '@/service/MemberAPI';
import { getMemberList } from '@/service/MemberAPI';

// Member 타입 정의
interface Member {
  id: number;
  name: string;
  email: string;
}

function Members() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  const memberList = async () => {
    try {
      const data = await getMemberList();
      if (data) {
        setMembers(data);
      }
    } catch (error) {
      console.error('Failed to fetch members:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    memberList();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Members List</h1>
      <ul className="space-y-2">
        {members.map((member) => (
          <li
            key={member.id}
            className="p-4 bg-white shadow rounded-lg">
            <div className="text-lg font-medium">{member.name}</div>
            <div className="text-gray-600">{member.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Members;
