import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
    state = {
        id: 0,
        value: 0,
    }
    render() {
        const {
            value,
        } = this.state;
        return (
            <div className='container-form'>
                <div className='form'>
                    <label htmlFor='valueExpense'>
                        {' '}
                        Valor Despesas:
                        <input 
                            className='input-form'
                            id='value'
                            onChange={ '' }
                            type='number'
                            placeholder='Digite o valor desejado'
                            name='value'
                            data-testid='value-input'
                            value={ value }
                        />
                    </label>
                </div>
            </div>
        
        );
    }
}

export default connect()(Form);