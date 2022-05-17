import { atom } from "recoil";
export const page = atom({
  key: "page", // unique ID (with respect to other atoms/selectors)
  default: 1, // default value (aka initial value)
});
