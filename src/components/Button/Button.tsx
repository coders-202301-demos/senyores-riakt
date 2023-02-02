import { useContext } from "react";
import { selectAllGentlemenActionCreator } from "../../store/actions/gentlemen/gentlemenActionCreators";
import GentlemenContext from "../../store/contexts/gentlemen/GentlemenContext";

const Button = (): JSX.Element => {
  const { dispatch } = useContext(GentlemenContext);

  const selectAll = () => {
    dispatch(selectAllGentlemenActionCreator());
  };

  return (
    <button className="button button--select" onClick={selectAll}>
      Select all
    </button>
  );
};

export default Button;
