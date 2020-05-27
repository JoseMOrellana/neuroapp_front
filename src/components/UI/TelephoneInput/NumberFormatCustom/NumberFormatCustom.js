import React from 'react'
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';


const NumberFormatCustom = (props) => {
    const { inputRef, onChange, init, ...other } = props;
    return (
      <NumberFormat
        {...other}
        decimalSeparator={false}
        thousandSeparator={'.'}
        getInputRef={inputRef}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
  
        isNumericString
        maxLength="12"
        prefix={props.name}
      />
    );
}

NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
  };

export default NumberFormatCustom