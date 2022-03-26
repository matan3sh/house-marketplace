declare module "*.png" {
  const value: string;
  export = value;
}
declare module "*.jpg" {
  const value: string;
  export = value;
}
declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}
