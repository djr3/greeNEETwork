import { NextComponentType } from "next";

export type Page = NextComponentType & {
  getLayout: Function;
};
