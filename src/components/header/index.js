import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { user } = this.props;
    console.log(user);
    console.log(mapStateToProps)
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
            <p data-testid="total-field">Despesas:</p>
            <p data-testid="header-currency-field">BRL</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    user: state.user, // Agora o objeto user contém a propriedade email
});



Header.propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string,
    }),
};

export default connect(mapStateToProps)(Header);
