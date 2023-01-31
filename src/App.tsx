import { useState } from "react";
import Info from "./components/Info/Info";
import { GentlemanStructure, Gentlemen } from "./data/types";
import gentlemenList from "./data/gentlemen";
import Gentleman from "./components/Gentleman/Gentleman";
import Button from "./components/Button/Button";

const App = (): JSX.Element => {
  const [gentlemen, setGentlemen] = useState<Gentlemen>(gentlemenList);

  const selectAllGentlemen = () => {
    setGentlemen(
      gentlemen.map((gentleman) => ({
        ...gentleman,
        selected: true,
      }))
    );
  };

  const toggleGentleman = (gentlemanToToggle: GentlemanStructure) => {
    setGentlemen(
      gentlemen.map((gentleman) => ({
        ...gentleman,
        selected:
          gentleman.id === gentlemanToToggle.id
            ? !gentleman.selected
            : gentleman.selected,
      }))
    );
  };

  const removeGentleman = (gentlemanToRemove: GentlemanStructure) => {
    setGentlemen(
      gentlemen.filter((gentleman) => gentleman.id !== gentlemanToRemove.id)
    );
  };

  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <Info gentlemen={gentlemen} />
        <Button selectAll={selectAllGentlemen} />
      </section>
      <main className="main">
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
      </main>
    </div>
  );
};

export default App;
