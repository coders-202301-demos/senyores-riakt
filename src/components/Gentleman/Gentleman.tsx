import { useMemo } from "react";
import { GentlemanStructure } from "../../data/types";

interface GentlemanProps {
  gentleman: GentlemanStructure;
  toggleGentleman: (gentleman: GentlemanStructure) => void;
  removeGentleman: (gentleman: GentlemanStructure) => void;
}

const Gentleman = ({
  gentleman,
  gentleman: {
    name,
    picture,
    alternativeText,
    profession,
    twitter,
    status,
    selected,
  },
  toggleGentleman,
  removeGentleman,
}: GentlemanProps): JSX.Element => {
  const initial = useMemo(() => {
    const nameParts = name.split(" ");

    return nameParts.length === 1 || nameParts[0].length > 3
      ? nameParts[0][0].toUpperCase()
      : nameParts[1][0].toUpperCase();
  }, [name]);

  const handleRemoveGentleman = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    event.stopPropagation();

    removeGentleman(gentleman);
  };

  return (
    <li
      className={`gentleman${selected ? " selected" : ""}`}
      onClick={() => toggleGentleman(gentleman)}
    >
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={`img/${picture}`}
          alt={alternativeText}
        />
        <span className="gentleman__initial">{initial}</span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profession:</span>
            {profession}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Status:</span> {status}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span> {twitter}
          </li>
        </ul>
      </div>
      <i className="icon gentleman__icon fas fa-check"></i>
      <i
        className="icon gentleman__icon gentleman__icon--delete fas fa-times"
        onClick={(event) => handleRemoveGentleman(event)}
      ></i>
    </li>
  );
};

export default Gentleman;
