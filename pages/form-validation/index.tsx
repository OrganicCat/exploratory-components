import { ChangeEvent, useState } from "react";

interface FormObject {
    firstName: string,
    lastName: string,
    email: string
}


export default function Home() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });
    const [formErrors, setFormErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const handleChange = (event: ChangeEvent<HTMLElement>) => {
        const { name, value } = event.target as HTMLInputElement;
        // take the name of the event target element and use it to set the value of the formData object
        // through destructing
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event: ChangeEvent<HTMLElement>) => {
        // we're not submitting to a server directly (or at all in this case)
        event.preventDefault();
        let errors = {};
        errors = !formData.firstName ? { ...errors, firstName: 'First name is required' } : errors;
        errors = !formData.lastName ? { ...errors, lastName: 'Last name is required' } : errors;
        errors = !formData.email ? { ...errors, email: 'Email is required' } : errors;
        setFormErrors(errors);

        return (
            <>

            </>
        )
    }