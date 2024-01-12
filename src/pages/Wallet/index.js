import React from 'react';
import Header from '../../components/header/index';
import Form from '../../components/form/index';

class Wallet extends React.Component {
  render() {
    return (
      <div className="wallet">
        <Header />
        <Form />
      </div>
    );
  }
}

export default Wallet;
