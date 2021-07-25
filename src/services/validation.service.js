// "\n dont work in this fields"

export const rules = () => ({
    required: value => typeof value === 'number' || (!!value && !!value.length) || 'Required to fill',
    name: value => !value || !!value.match(/[a-zа-я]{2,}/i) || 'At least two letters',
    email: value => !value || !!value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) || 'Enter valid email',
        password:  value => !value ||
            !!value.match(/^(?=.{8,}$)(?=(?:.*?[A-Z]){2})(?=.*?[a-z])(?=.*[!@#$%^&*]).*$/) ||
            "Password must consist: from 8 characters, 2 uppercase, 1 special character",
});

