import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const BloodPicker = (props) => {
  const bloodtype = [
        {
          value: 'A+',
          label: 'A+',
        },
        {
          value: 'A-',
          label: 'A-',
        },
        {
          value: 'B+',
          label: 'B+',
        },
        {
          value: 'B-',
          label: 'B-',
        },
        {
          value: 'O+',
          label: 'O+',
        },
        {
          value: 'O-',
          label: 'O-',
        },
        {
          value: 'AB+',
          label: 'AB+',
        },
        {
          value: 'AB-',
          label: 'AB-',
        },
        {
          value: 'DESCONOCIDO',
          label: 'Desconoce',
        }
      ];
    return(
        <TextField className="tblood"
          id="blood_type"
          name="blood_type"
          select
          fullWidth
          label="Tipo de sangre"
          value={props.blood_type}
          onChange={props.onChangeFnc}         
          variant="outlined"
        >
              {bloodtype.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    )
}

export default BloodPicker