import React from 'react'


const validations = {
    cpf: {
        regex: /[0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2}$/
        ,
        message: "Preencha um CPF no formato indicado: 000.000.000-00",
    },
    email: {
        regex: /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
        ,
        message: 'Preencha um e-mail válido.'
    },

    phone: {
        regex: /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/
        ,
        message: 'Preencha um telefone válido.'
    }


}

const useForm = (validation) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(null);

    const validate = (value) => {
        if (validation === false) return true
        if (value.length === 0) {
            setError('Preencha um valor.');
            return false;
        } else if (validations[validation] && validations[validation].regex.test(value) === false) {
            setError(validations[validation].message);
            return false;
        } else {
            setError(null);
            return true
        }
    }

    const onChange = ({ target }) => {
        if (error) validate(target.value)
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