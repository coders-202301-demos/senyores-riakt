import { GentlemanStructure, GentlemenStructure } from "../../data/types";
import Gentleman from "../Gentleman/Gentleman";

interface GentlemenProps {
  gentlemen: GentlemenStructure;
  toggleGentleman: (gentleman: GentlemanStructure) => void;
  removeGentleman: (gentleman: GentlemanStructure) => void;
}

const Gentlemen = ({
  toggleGentleman,
  removeGentleman,
  gentlemen,
}: GentlemenProps): JSX.Element => {
  return (
    <ul className="gentlemen">
      {gentlemen.map((gentleman) => (
        <Gentleman
          key={gentleman.id}
          gentleman={gentleman}
          toggleGentleman={toggleGentleman}
          removeGentleman={removeGentleman}
        />
      ))}
    </ul>
  );
};

export default Gentlemen;
