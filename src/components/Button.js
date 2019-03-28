import React from 'react';

class Button extends React.Component {
  render() {
    //   console.log('this.propps', this.props);
    return (
      <button onClick={this.props.onChangeTab}>{this.props.children}</button>
    );
  }
}

export default Button;