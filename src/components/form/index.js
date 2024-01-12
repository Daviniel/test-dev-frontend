import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
    state = {
        id: 0,
        value: 0,
        description: '',
    }

    handleChange = (event) => {
        const { target } = event;
        const { value, name } = target;

        this.setState({
            [name]: value,
        });
    };

    render() {
        const {
            value,
            description,
        } = this.state;
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
                    >
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
                        >
                            <option value="money">Dinheiro</option>
                            <option value="credit card">Cartão de crédito</option>
                            <option value="debit card">Cartão de débito</option>
                        </select>
                    </label>
                </div>
            </div>
        
        );
    }
}

export default connect()(Form);