import * as Yup from 'yup';

export const schemas = {
    login: Yup.object({
        username: Yup
            .string('Account number must be string')
            .required('Username is required'),
        password: Yup
            .string('Amount should must be number')
            .required('Password is required.')
    }),
    signup : Yup.object({

    })
}