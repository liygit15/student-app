import { useState } from 'react';
import PropTypes from 'prop-types';

const NewStudentForm = (props) => {
    const [formFields, setFormFields] = useState({
        name: '',
        email: '',
    });

    const handleNameChange = (event) => {
        setFormFields({
            ...formFields,
            name: event.target.value,
        });
    };

    const handleEmailChange = (event) => {
        setFormFields({
            ...formFields,
            email: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        props.onStudentAdd({
            nameData: formFields.name,
            emailData: formFields.email,
        });

        setFormFields({
            name: '',
            email: '',
        });
    };

    return (
        <form  onSubmit={handleSubmit}>
            <div>
                <label htmlFor="fullName">Name:</label>
                <input
                    id="fullName"
                    name="fullName"
                    value={formFields.name}
                    onChange={handleNameChange} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input name="email"
                    id="email"
                    value={formFields.email}
                    onChange={handleEmailChange} />
            </div>
            <input
                type="submit"
                value="Add Student" />
        </form>
    );
};

NewStudentForm.propTypes = {
    onStudentAdd: PropTypes.func.isRequired,
};

export default NewStudentForm;