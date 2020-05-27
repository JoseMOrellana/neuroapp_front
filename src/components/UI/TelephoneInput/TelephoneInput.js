import React from 'react';
import TextField from '@material-ui/core/TextField';

import Tel from '../../TelephoneFormat/TelephoneFormat';

const TelephoneInput = (props) => (
    <TextField className="ctel1"
        id= {props.id}
        fullWidth
        label={props.label}
        type="text"
        value={props.value}
        name="telephone"
        InputProps={{
            inputComponent: Tel,
        }}
        variant="outlined"
        onChange={props.onChangePrefixed(props.name)}/>
)
export default TelephoneInput