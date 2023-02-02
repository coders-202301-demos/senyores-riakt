import { GentlemanStructure, GentlemenStructure } from "../../../data/types";
import {
  GentlemenActionType,
  LoadGentlemenAction,
  RemoveGentlemanAction,
  SelectAllGentlemenAction,
} from "./types";

export const loadGentlemenActionCreator = (
  gentlemen: GentlemenStructure
): LoadGentlemenAction => ({
  type: GentlemenActionType.loadGentlemen,
  payload: gentlemen,
});

export const selectAllGentlemenActionCreator =
  (): SelectAllGentlemenAction => ({
    type: GentlemenActionType.selectAllGentlemen,
  });

export const removeGentlemanActionCreator = (
  gentleman: GentlemanStructure
): RemoveGentlemanAction => ({
  type: GentlemenActionType.removeGentleman,
  payload: gentleman,
});
