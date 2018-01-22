import React, {Component} from 'react';

class Template extends Component {
  render() {
    return (
      <div>
        <header></header>
        <main>{this.prop.children}</main>
      </div>
    )
  }
}

export default Template;
