import React from "react";
export default class User extends React.Component {
  testFunction(name) {
    return "Hello! " + name;
  }

  render() {
    return <>Hello User!</>;
  }
}
