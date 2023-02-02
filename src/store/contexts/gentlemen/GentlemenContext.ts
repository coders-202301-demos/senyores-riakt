import { createContext } from "react";
import { GentlemenStructure } from "../../../data/types";
import { GentlemenAction } from "../../actions/gentlemen/types";

interface GentlemenContextStructure {
  gentlemen: GentlemenStructure;
  dispatch: React.Dispatch<GentlemenAction>;
}

const GentlemenContext = createContext({} as GentlemenContextStructure);

export default GentlemenContext;
