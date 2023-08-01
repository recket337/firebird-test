/// <reference types="react-scripts" />
/// <reference types="redux-thunk/extend-redux" />
import "redux-thunk/extend-redux";
// https://github.com/reduxjs/redux-thunk/issues/333

declare module "*.scss" {
  var all: { [selector: string]: string };
  export = all;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
