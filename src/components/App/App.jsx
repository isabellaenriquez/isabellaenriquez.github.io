import React from 'react';
import NavBar from '../NavBar/NavBar';
export default class App extends React.Component {
  getMenu() {
    // let width = window.innerWidth;
    // if (width >= 700) {
    return <NavBar>{this.props.children}</NavBar>;
    // } else {
    //   return <MobileNav />;
    // }
  }

  render() {
    return <>{this.getMenu()}</>;
  }
}
