import React, { useState } from "react";

// This could all be done any  number of ways, such as passing a larger state object down that
// each component would then destructure for its own use. Or wrapping the whole thing in a context
// provider.

// If I was solving a real world problem, I'd use something similar to this, to keep good separation
// of concerns and to keep the code clean and readable. Form, Field, and CheckboxGroup are all
// fairly dumb components, and the logic is handled in the parent component.

const Form = (props: any) => {
    const propChildrenArray = props.children;

    return (
        <>
            <form id="MyForm">
                {propChildrenArray.map((child: any) => {
                    return child;
                })}
            </form>
        </>
    )
}

const Field = (props: any) => {
    return (
        <input type="text" {...props} />
    )
}

const CheckboxGroup = ({ name, options, ...rest }: { name: string, options: string[], selectedvalues?: any, checkChange?: any }) => {
    const colorValues = rest?.selectedvalues ?? [];
    return (
        <>
            {options.map((option, index: number) =>
                <label key={index}>
                    <input
                        name={option}
                        onChange={rest?.checkChange}
                        type="checkbox"
                        defaultChecked={colorValues.includes(option)}
                    />
                    <span>{option}</span>
                </label>
            )}
        </>
    )
}

interface InitialFormValues {
    firstName: string;
    lastName: string;
    colors: string[];
}

export default function UserProfileForm() {
    const initialValues: InitialFormValues = {
        firstName: `Daddy`,
        lastName: `Cool`,
        colors: [`green`, `red`]
    };

    const [formProps, setFormProps] = useState<any>({});
    const [formValues, setFormValues] = useState<InitialFormValues>(initialValues);

    const handleOnChange = (e: any) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleCheckChange = (e: any) => {
        const { name, checked } = e.target;
        const newColors = checked ? [...formValues.colors, name] : formValues.colors.filter((color: string) => color !== name);
        setFormValues({ ...formValues, colors: newColors });
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
        console.log(formValues)
    }

    return (
        <Form>
            <Field name="firstName" onChange={handleOnChange} defaultValue={initialValues?.firstName} {...formProps} />
            <Field name="lastName" onChange={handleOnChange} defaultValue={initialValues?.lastName} {...formProps} />

            <CheckboxGroup
                name="colors"
                options={['red', 'green', 'blue']}
                selectedvalues={initialValues?.colors}
                checkChange={handleCheckChange}
                {...formProps}
            />

            <button type="submit" onClick={onSubmit}>Submit</button>
        </Form>
    )
}

