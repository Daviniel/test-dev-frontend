import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  getCurrencyName = (currencyCode) => {
    // Adicione um mapeamento de códigos de moeda para nomes completos
    const currencyNames = {
      USD: 'Dólar Comercial',
      EUR: 'Euro',
      // Adicione mais códigos de moeda conforme necessário
    };

    return currencyNames[currencyCode] || currencyCode;
  };

  render() {
    const { expenses } = this.props;

    return (
      <div>
        <h1>Tabela de Gastos</h1>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de Pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio Utilizado</th>
              <th>Valor Convertido</th>
              <th>Moeda de Conversão</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{expense.value}</td>
                <td>{this.getCurrencyName(expense.currency)}</td>
                <td>{expense.exchangeRates[expense.currency].ask}</td>
                <td>{(expense.value * expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
                <td>Real</td> {/* Sempre define a Moeda de Conversão como "Real" */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      method: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      exchangeRates: PropTypes.object.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);