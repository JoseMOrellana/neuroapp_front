import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


const AllergyPicker = React.memo((props) => {
    let valuesList = props.valuesList ? props.valuesList : []
    return(
        <TextField className="state"
              id=""
              name="allergy"
              required
              select
              fullWidth
              label="Alergias"
              value={props.state}
              onChange={props.onChangeFnc}        
              variant="outlined"
              disabled={!props.valuesList.length > 0}
        >
              {valuesList.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
    )
})

export default AllergyPicker