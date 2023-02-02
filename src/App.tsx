import { useContext, useEffect, useState } from "react";
import Info from "./components/Info/Info";
import { GentlemanStructure, GentlemenStructure } from "./data/types";
import Button from "./components/Button/Button";
import Gentlemen from "./components/Gentlemen/Gentlemen";
import GentlemenContext from "./store/contexts/gentlemen/GentlemenContext";
import { loadGentlemenActionCreator } from "./store/actions/gentlemen/gentlemenActionCreators";

const App = (): JSX.Element => {
  const [, setGentlemen] = useState<GentlemenStructure>([]);
  const { gentlemen, dispatch } = useContext(GentlemenContext);

  useEffect(() => {
    (async () => {
      const response = await fetch(process.env.REACT_APP_URL_API!);
      const gentlemenApi = (await response.json()) as GentlemenStructure;

      dispatch(loadGentlemenActionCreator(gentlemenApi));
    })();
  }, [dispatch]);

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

  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <Info gentlemen={gentlemen} />
        <Button />
      </section>
      <main className="main">
        <Gentlemen gentlemen={gentlemen} toggleGentleman={toggleGentleman} />
      </main>
    </div>
  );
};

export default App;
