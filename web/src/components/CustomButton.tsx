import React from 'react';
import Button from '@material-ui/core/Button';




 export default function CustomButton(props:any) {
    return (
        <Button type="submit" variant="contained" color="primary" style={props.style}>
            {props.text}
        </Button>
    );
} 


/*  <Button variant="contained" color="primary" className="btnCadastro">
            {props.text}
        </Button> */

/*   */