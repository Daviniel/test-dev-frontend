import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendForm, fetchCoin } from '../../actions';
import apiCoins from '../../services/API';

const Food = 'Alimentação';

class Form extends Component {
    state = {
        id: 0,
        value: 0,
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: Food,
        exchangeRates: '',
    };

    componentDidMount() {
        const { currencies } = this.props;
        currencies();
    }

    handleChange = (event) => {
        const { target } = event;
        const { value, name } = target;

        this.setState({
            [name]: value,
        });
    };

    handleClick = async () => {
        const { fillEexchange } = this.props;
      
        try {
          const exchangeRates = await apiCoins();
          if (exchangeRates) {
            this.setState({ exchangeRates }, () => {
              fillEexchange(this.state);
              this.setState((state) => ({
                id: state.id + 1,
                value: 0,
                description: '',
                currency: 'USD',
                method: 'Dinheiro',
                tag: Food,
                exchangeRates: '',
              }));
            });
          } else {
            console.error('Erro ao obter taxas de câmbio.');
          }
        } catch (error) {
          console.error('Erro na requisição de taxas de câmbio:', error);
        }
    };
    
    render() {

        const {
            value,
            description,
            currency,
            method,
            tag,
        } = this.state;

        const { currencyList } = this.props;

        return (
            <div className='container-form'>
                <div className='form'>
                    <label htmlFor='valueExpense'>
                        {' '}
                        Valor da Despesa:
                        <input 
                            className='input-form'
                            id='value'
                            onChange={ this.handleChange }
                            type='number'
                            placeholder='Digite o valor desejado'
                            name='value'
                            data-testid='value-input'
                            value={ value }
                        />
                    </label>
                </div>
                {' '}
                <div className='form'>
                    Descrição da Despesa:
                    <label htmlFor='description'>
                        <input 
                            className='input-form'
                            id='description'
                            onChange={ this.handleChange }
                            type='text'
                            name='description'
                            data-testid='description-input'
                            placeholder='Descrição da despesa'
                            value= { description }
                        />
                    </label>
                </div>
                <div className='form'>
                    Moeda:
                    <select 
                        id='currency'
                        name='currency'
                        data-testid = "currency-input"
                        onChange={ this.handleChange }
                        value={ currency }
                    >
                        {currencyList
                            .filter((item) => item !== 'USDT')
                            .map((item) => (
                                <option data-testid={ item } key={ item } value={ item }>
                                    {item}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div className='form'>
                    <label htmlFor='metgod'>
                        Método de pagamento:
                        <select
                            id='method'
                            name='method'
                            data-testid='method-input'
                            onChange={ this.handleChange }
                            value={ method }
                        >
                            <option value="Dinheiro">Dinheiro</option>
                            <option value="credit card">Cartão de crédito</option>
                            <option value="debit card">Cartão de débito</option>
                        </select>
                    </label>
                </div>
                <div className='form'>
                    <label  htmlFor='tag'>
                        Tipo da despesa:
                        <select
                            id='tag'
                            name='tag'
                            data-testid='tag-input'
                            onChange={ this.handleChange }
                            value={ tag }
                        >
                            <option value='Food'>Alimentação</option>
                            <option value='Leisure'>Lazer</option>
                            <option value='Work'>Trabalho</option>
                            <option value='Transport'>Transporte</option>
                            <option value='Health'>Saúde</option>
                        </select>
                    </label>
                </div>
                <div className='button-div'>
                    <button className='button-ad' onClick={ this.handleClick } type='submit'>
                        Adicionar Despesas
                    </button>
                </div>
            </div>
        
        );
    }
}

const mapStateToProps = (state) => ({
    currencyList: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
    currencies: () => dispatch(fetchCoin()),
    fillEexchange: (state) => dispatch(sendForm(state)),
});

Form.propTypes = {
    currencies: PropTypes.func.isRequired,
    fillEexchange: PropTypes.func.isRequired,
    currencyList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);