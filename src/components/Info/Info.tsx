import { GentlemenStructure } from "../../data/types";

interface InfoProps {
  gentlemen: GentlemenStructure;
}

const Info = ({ gentlemen }: InfoProps): JSX.Element => {
  const selectedGentlemenCount = gentlemen.filter(
    (gentleman) => gentleman.selected
  ).length;

  return (
    <p className="info">{selectedGentlemenCount} gentlemen pointing at you</p>
  );
};

export default Info;
