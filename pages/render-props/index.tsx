import React from "react";

const Form = (props: any) => {

    const propChildrenArray = props.children().props.children;
    const initialValues = props.initialvalues;
    const newSubmit = (event: any) => {
        event.preventDefault();
        const values = gatherValues();
        props.onSubmit(values);
    }

    const gatherValues = () => {
        const form = document.getElementById("MyForm");
        if (form === null) return {};
        const inputs = form.getElementsByTagName("input");
        const values: { name: string, value: string }[] = [];
        for (let i = 0; i < inputs.length; i++) {
            const findValue = inputs[i].type === "checkbox" ? inputs[i].checked.toString() : inputs[i].value;
            const valueObject = {
                name: inputs[i].name,
                value: findValue
            };
            values.push(valueObject);
        }
        return values;
    }

    return (
        <>
            <form id="MyForm">
                {propChildrenArray.map((child: any, index: number) => {
                    if (React.isValidElement(child) && child.type === 'button') {
                        return React.cloneElement(
                            child as React.ReactElement<
                                any,
                                string | React.JSXElementConstructor<any>
                            >,
                            { onClick: newSubmit, key: index }
                        );
                    }
                    return initialValues ? React.cloneElement(child, { onChange: props.onChange, initialvalues: initialValues, key: index }) : child;
                })}
            </form>
        </>
    )
}

const Field = (props: any) => {
    return (
        <input type="text" {...props} defaultValue={props.initialvalues[props.name]} />
    )
}

const CheckboxGroup = ({ name, options, ...rest }: { name: string, options: string[], initialvalues?: any }) => {
    const colorValues = rest?.initialvalues?.colors ?? [];
    return (
        <>
            {options.map((option, index: number) =>
                <label key={index}>
                    <input
                        name={option}
                        type="checkbox"
                        defaultChecked={colorValues.includes(option)}
                        {...rest}
                    />
                    <span>{option}</span>
                </label>
            )}
        </>
    )
}

const UserProfileForm = () => (
    <Form
        initialvalues={{
            firstName: `Daddy`,
            lastName: `Cool`,
            colors: [`green`]
        }}
        onSubmit={(values: any) => console.log(values)}>

        {(formProps: any) => (
            <>
                <Field name="firstName" {...formProps} />
                <Field name="lastName" {...formProps} />

                <CheckboxGroup
                    name="colors"
                    options={['red', 'green', 'blue']}
                    {...formProps}
                />

                <button type="submit">Submit</button>
            </>
        )}

    </Form>
)

export default function RenderProps() {
    return <UserProfileForm />
}

