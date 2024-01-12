import React from 'react';
import Header from '../../components/header/index';
import Form from '../../components/form/index';
import Table from '../../components/table';

class Wallet extends React.Component {
  render() {
    return (
      <div className="wallet">
        <Header />
        <Form /> 
        <Table />
      </div>
    );
  }
}

export default Wallet;
