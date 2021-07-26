import React from 'react';
import NavBar from '../NavBar/NavBar';
export default class App extends React.Component {
  render() {
    return (
      <>
        <NavBar>{this.props.children}</NavBar>
      </>
    );
  }
}
