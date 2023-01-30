import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import ContactConectionComponent from '../pure/contact_conection';


const ContactComponent = ({ firstName, lastName, email, conected }) => {

    const [contact, setContact] = useState(new Contact(firstName, lastName, email, conected));

    const updatedConected = () => {
        var updatedContact = new Contact(contact.firstName, contact.lastName, contact.email, !contact.conected); 
        setContact(updatedContact);
    }

    return (
        <div>
            <h2>
                Nombre: { contact.firstName }
            </h2>
            <h2>
                Apellido: { contact.lastName }
            </h2>
            <h3>
                Email: { contact.lastName }
            </h3>

            <ContactConectionComponent contact={ contact } 
                                       handleClick={ updatedConected }/>
        </div>
    );
};


ContactComponent.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    conected: PropTypes.bool,
};


export default ContactComponent;
