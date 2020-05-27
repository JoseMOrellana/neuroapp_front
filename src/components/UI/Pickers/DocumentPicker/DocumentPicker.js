import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


const DocumentPicker = (props) => {
  const doctype = [
    {
      value: 'V-',
      label: 'V-',
    },
    {
      value: 'E-',
      label: 'E-',
    },
  ];

    return(
        <TextField className="cdocumenttype"
            id="documenttype"
            name="documentType"
            required
            select
            fullWidth
            label="Tipo de documento"
            defaultValue="V-"
            value={props.documentType}
            onChange={props.onChangeFnc}
            variant="outlined"
        >
              {doctype.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    )
}

export default DocumentPicker