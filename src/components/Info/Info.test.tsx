import { screen, render } from "@testing-library/react";
import { Gentlemen } from "../../data/types";
import Info from "./Info";

describe("Given an Info component", () => {
  describe("When it receives a list of three gentlemen with two of them selected", () => {
    test("Then it should show '2 gentlemen pointing at you'", () => {
      const gentlemen: Gentlemen = [
        {
          id: 1,
          name: "Marc",
          alternativeText: "",
          picture: "",
          profession: "",
          status: "",
          twitter: "",
          selected: false,
        },
        {
          id: 2,
          name: "Sergi",
          alternativeText: "",
          picture: "",
          profession: "",
          status: "",
          twitter: "",
          selected: true,
        },
        {
          id: 3,
          name: "Bottle",
          alternativeText: "",
          picture: "",
          profession: "",
          status: "",
          twitter: "",
          selected: true,
        },
      ];
      const infoText = "2 gentlemen pointing at you";

      render(<Info gentlemen={gentlemen} />);

      const info = screen.getByText(infoText);

      expect(info).toBeInTheDocument();
    });
  });
});
