import { GentlemenStructure } from "../../../data/types";
import { loadGentlemenActionCreator } from "./gentlemenActionCreators";
import { GentlemenActionType, LoadGentlemenAction } from "./types";

describe("Given a gentlemenActionCreators function", () => {
  describe("When it receives a list of two gentlemen", () => {
    test("Then it should return an action with type 'loadGentlemen' and the two gentlemen as payload", () => {
      const gentlemen: GentlemenStructure = [
        {
          id: 1,
          name: "Fary",
          picture: "",
          alternativeText: "",
          profession: "",
          status: "",
          twitter: "",
          selected: false,
        },
        {
          id: 2,
          name: "Carles",
          picture: "",
          alternativeText: "",
          profession: "",
          status: "",
          twitter: "",
          selected: false,
        },
      ];
      const expectedLoadGentlemenAction: LoadGentlemenAction = {
        type: GentlemenActionType.loadGentlemen,
        payload: gentlemen,
      };

      const loadGentlemenAction = loadGentlemenActionCreator(gentlemen);

      expect(loadGentlemenAction).toStrictEqual(expectedLoadGentlemenAction);
    });
  });
});
