declare module '*.jpg';
declare module '*.png';
declare module "*.woff2" 
declare module "*.otf"
declare module '*.woff';
declare module "*.ttf" {
  const value: any;
  export = value;
}


declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}