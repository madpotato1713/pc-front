import { Member } from './ExampleAPI';

interface ExampleGetAPIProps {
  members: Member[];
}

const ExampleGetAPI = (props: ExampleGetAPIProps) => {
  const { members } = props;

  return (
    <ul>
      {members.map((member) => (
        <li key={member.id}>
          <div>{member.name}</div>
          <div>{member.email}</div>
        </li>
      ))}
    </ul>
  );
};

export default ExampleGetAPI;
