interface ButtonProps {
  selectAll: () => void;
}

const Button = ({ selectAll }: ButtonProps): JSX.Element => {
  return (
    <button className="button button--select" onClick={selectAll}>
      Select all
    </button>
  );
};

export default Button;
