import React from 'react';
import PropTypes from 'prop-types';

import NumberFormat from 'react-number-format';

const tel = (props) => {
    const { inputRef, onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        format="+(58)### ###-####"
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
      />
    );
  }
  
tel.propTypes = {
    inputRef: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default tel;