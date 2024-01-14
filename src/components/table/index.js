import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editExpense, saveNewExpenses } from '../../actions/index';
import { Container } from './styles';


class Table extends Component {
  handleClick = (id) => {
    const { dispatch } = this.props; 
    dispatch(saveNewExpenses(id));
  };

  handleEdit = (curr) => {
    const { dispatch } = this.props;
    dispatch(editExpense(curr, curr.id));
  };
  render() {
    const { expenses } = this.props;

    return (
      <Container>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody className='table__body'>
            {expenses.map((curr) => {
              const currencies = Object.entries(curr.exchangeRates)
                .find((value) => value[0] === curr.currency);
              const ask = Number(currencies[1].ask);
              const nameCurrency = currencies[1].name;
              const sumTotal = ask * Number(curr.value);
              const value = Number(curr.value);
              return (
                <tr key={curr.id}>
                  <td>{curr.description}</td>
                  <td>{curr.tag}</td>
                  <td>{curr.method}</td>
                  <td><strong>{value.toFixed(2)}</strong></td>
                  <td>{nameCurrency}</td>
                  <td>{ask.toFixed(2)}</td>
                  <td>{sumTotal.toFixed(2)}</td>
                  <td>
                    <button
                      data-testid="edit-btn"
                      onClick={() => this.handleEdit(curr)}
                    >
                    </button>
                    <button
                      data-testid="delete-btn"
                      onClick={() => this.handleClick(curr.id)}
                    >
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Container>
    )
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf({}),
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);

