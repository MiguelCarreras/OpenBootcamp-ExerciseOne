import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactConectionComponent = ({ contact, handleClick }) => {
    return (
        <div>
            <h4>
                { contact.conected ? "Contacto En Linea" : "Contacto No Disponible" }
            </h4>
            <button onClick={ handleClick }>{contact.conected ? "Desconectar" : "Conectar"}</button>
        </div>
    );
};


ContactConectionComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    handleClick: PropTypes.func
};


export default ContactConectionComponent;
