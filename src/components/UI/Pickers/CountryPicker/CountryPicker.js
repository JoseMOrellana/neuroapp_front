import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


const CountryPicker = (props) => {
    let valuesList = props.valuesList ? props.valuesList : []
    console.log(valuesList)
    return(
        <TextField className="country"
              id="country"
              name="country"
              required
              select
              autoComplete
              fullWidth
              label="Pais"
              value={props.value}
              onChange={props.onChangeFnc}        
              variant="outlined"
        >
              {valuesList.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.country_name}
            </MenuItem>
          ))}
        </TextField>
    )
}

export default CountryPicker