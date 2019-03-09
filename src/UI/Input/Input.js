import React from 'react';
import classes from './Input.module.css'

const input = props => {


        return (

            <
            input
            //tuk mojem da slojim cqlata logika, ako ima errori da swetne cherveno ...

            className = { classes.Input }

            // onChange={props.onShange} 
            // style={props.style}
            // //style - za da mogat horata dopylnitelno da go stilizirat
            // value={props.value}
            // placeholder={props.placeholder}
            // za da ne izbroqvame vsichki - onfocus, onbkur .... razpukvame obekta
            {...props }
            //taka vsichko koeto podadem shte vliza v tova inputche
            styles = { props.styles }
            />)
        }
        export default input;