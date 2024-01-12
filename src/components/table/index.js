import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  getCurrencyName = (currencyCode) => {
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
            {expenses.map((expense) => {
              const {
                id,
                description,
                tag,
                method,
                value,
                currency,
                exchangeRates
              } = expense;

              const currencyName = this.getCurrencyName(currency);

              // Verifique se o valor é um número antes de chamar toFixed
              const formattedValue = typeof value === 'number' ? value.toFixed(2) : parseFloat(value).toFixed(2);
              // Verifique se exchangeRates e exchangeRates[currency] existem antes de acessar
              const askRate = exchangeRates && exchangeRates[currency] && exchangeRates[currency].ask;

              // Verifique se askRate é um número antes de chamar toFixed
              const formattedAskRate = typeof askRate === 'number' ? askRate.toFixed(2) : 'Câmbio Inválido';

              const convertedValue = askRate ? (value * askRate).toFixed(2) : 'Valor Convertido Inválido';

              return (
                <tr key={id}>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{formattedValue}</td>
                  <td>{currencyName}</td>
                  <td>{formattedAskRate}</td>
                  <td>{convertedValue}</td>
                  <td>Real</td>
                </tr>
              );
            })}
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
