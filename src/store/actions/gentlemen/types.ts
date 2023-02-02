import { GentlemanStructure, GentlemenStructure } from "../../../data/types";

export enum GentlemenActionType {
  loadGentlemen,
  selectAllGentlemen,
  removeGentleman,
}

export interface GentlemenAction {
  type: GentlemenActionType;
  payload?: unknown;
}

export interface LoadGentlemenAction extends GentlemenAction {
  payload: GentlemenStructure;
}

export interface SelectAllGentlemenAction extends GentlemenAction {}

export interface RemoveGentlemanAction extends GentlemenAction {
  payload: GentlemanStructure;
}
