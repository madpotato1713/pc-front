import './ButtonExample.scss';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const ButtonExample = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      className="button-example"
      onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonExample;
