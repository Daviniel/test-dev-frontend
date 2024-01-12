import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { user, expenses } = this.props;


    // Cálculo do total de despesas
    const all = expenses.reduce(
        (accumulator, element) =>
          accumulator + element.value * element.exchangeRates[element.currency].ask,
        0
    );

    if (!user) {
      return null;
    }

    return (
      <div className="header-form">
        <div className="container-logo">
            <h3>Carteira Digital</h3>
        </div>
        <div>
            <h5 data-testid="email-field">{`Email: ${user.email}`}</h5>
            <p data-testid="all-field">Despesas: 
                {' '}
                {all.toFixed(2)}
            </p>
            <p data-testid="header-currency-field">BRL</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    user: state.user, // Agora o objeto user contém a propriedade email
    expenses: state.wallet.expenses,
});



Header.propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string,
    }),
    expenses: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps)(Header);
