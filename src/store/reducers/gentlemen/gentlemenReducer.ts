import { GentlemenStructure } from "../../../data/types";
import {
  GentlemenAction,
  GentlemenActionType,
  LoadGentlemenAction,
  RemoveGentlemanAction,
} from "../../actions/gentlemen/types";

const gentlemenReducer = (
  currentGentlemen: GentlemenStructure,
  action: GentlemenAction
): GentlemenStructure => {
  let newGentlemen: GentlemenStructure;

  switch (action.type) {
    case GentlemenActionType.loadGentlemen:
      newGentlemen = [...(action as LoadGentlemenAction).payload];
      break;
    case GentlemenActionType.selectAllGentlemen:
      newGentlemen = currentGentlemen.map((gentleman) => ({
        ...gentleman,
        selected: true,
      }));
      break;
    case GentlemenActionType.removeGentleman:
      newGentlemen = currentGentlemen.filter(
        (gentleman) =>
          gentleman.id !== (action as RemoveGentlemanAction).payload.id
      );
      break;
    default:
      newGentlemen = currentGentlemen;
  }

  return newGentlemen;
};

export default gentlemenReducer;
