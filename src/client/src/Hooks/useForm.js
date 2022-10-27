import React from 'react'

const validations = {
    email: {
        regex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
        ,
        message: "Preencha um email válido",
    },
}

const useForm = (validation) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(null);

    const validate = (value) => {
        if (validation === false) return true
        if (value.length === 0) {
            setError('Preencha um valor.');
            return false;
        } else if (validations[validation] && validations[validation].regex.test(value)) {
            setError(validations[validation].message);
            setValue('')
            return false;
        } else {
            setError(null);
            return true
        }
    }

    const onChange = ({ target }) => {
        if(error) validate(target.value)
        setValue(target.value)
    }

    return {
        value,
        setValue,
        onChange,
        error,
        validate: () => validate(value),
        onBlur: () => validate(value),
    }
}

export default useForm