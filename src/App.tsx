import { useEffect, useState } from "react";
import Info from "./components/Info/Info";
import { GentlemanStructure, GentlemenStructure } from "./data/types";
import Button from "./components/Button/Button";
import Gentlemen from "./components/Gentlemen/Gentlemen";

const App = (): JSX.Element => {
  const [gentlemen, setGentlemen] = useState<GentlemenStructure>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(process.env.REACT_APP_URL_API!);
      const gentlemenApi = (await response.json()) as GentlemenStructure;

      setGentlemen(gentlemenApi);
    })();
  }, []);

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

  const removeGentleman = async (gentlemanToRemove: GentlemanStructure) => {
    const response = await fetch(
      `${process.env.REACT_APP_URL_API}${gentlemanToRemove.id}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      return;
    }

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
        <Gentlemen
          gentlemen={gentlemen}
          removeGentleman={removeGentleman}
          toggleGentleman={toggleGentleman}
        />
      </main>
    </div>
  );
};

export default App;
