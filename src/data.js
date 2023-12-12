import { assets } from "./assets/assets";
export const data = {
  slider: [
    {
      term: "SUMMER 2020",
      title: "NEW COLLECTION",
      description:
        "We know how large objects will act, but things on a small scale.",
      button: "SHOP NOW",
      image: assets.sliders[0],
    },
  ],
  editorsPick: {
    heading: "EDITOR'S PICK",
    paragraph: "Problems trying to resolve the conflict bewtween",
    card: [
      { name: "MEN", image: assets.editorsPick[0] },
      { name: "WOMEN", image: assets.editorsPick[1] },
      { name: "ACCESSORIES", image: assets.editorsPick[2] },
      { name: "KIDS", image: assets.editorsPick[3] },
    ],
  },
};
