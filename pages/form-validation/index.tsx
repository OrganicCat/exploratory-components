import { ChangeEvent, FormEvent, useState } from "react";
import styles from './FormValidation.module.css';
import Head from "next/head";

interface FormObject {
    firstName?: string,
    lastName?: string,
    email?: string
}

export default function FormValidation() {
    const [formData, setFormData] = useState<FormObject>({
        firstName: '',
        lastName: '',
        email: '',
    });
    const [formErrors, setFormErrors] = useState<FormObject>({
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

    const handleSubmit = (event: FormEvent<HTMLElement>) => {
        // we're not submitting to a server directly (or at all in this case)
        event.preventDefault();
        let errors: FormObject = {};
        errors = !formData.firstName ? { ...errors, firstName: 'First name is required' } : errors;
        errors = !formData.lastName ? { ...errors, lastName: 'Last name is required' } : errors;
        errors = !formData.email ? { ...errors, email: 'Email is required' } : errors;
        // regex to validate email
        errors = formData.email && !/\S+@\S+\.\S+/.test(formData.email) ? { ...errors, email: 'Email is invalid' } : errors;

        setFormErrors(errors);

        if (Object.keys(errors).length) return;
    };

    return (
        <>
            <Head>
                <title>Form Validation</title>
                <meta name="description" content="Form Validation" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <form onSubmit={handleSubmit}>
                <div>
                    First Name:
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                    {formErrors.firstName && <span className={styles.formErrorColors}>{formErrors.firstName}</span>}
                </div>
                <div>
                    Last Name:
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                    {formErrors.lastName && <span className={styles.formErrorColors}>{formErrors.lastName}</span>}
                </div>
                <div>
                    Email:
                    <input type="text" name="email" value={formData.email} onChange={handleChange} />
                    {formErrors.email && <span className={styles.formErrorColors}>{formErrors.email}</span>}
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}