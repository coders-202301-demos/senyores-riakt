import { useReducer } from "react";
import gentlemenReducer from "../../reducers/gentlemen/gentlemenReducer";
import GentlemenContext from "./GentlemenContext";

interface GentlemenContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const GentlemenContextProvider = ({
  children,
}: GentlemenContextProviderProps): JSX.Element => {
  const [gentlemen, dispatch] = useReducer(gentlemenReducer, []);

  return (
    <GentlemenContext.Provider value={{ gentlemen, dispatch }}>
      {children}
    </GentlemenContext.Provider>
  );
};

export default GentlemenContextProvider;
