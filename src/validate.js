import React, { useState } from "react";

const Validator = {
    isRequired: (value, message) => {
        return value.trim() ? undefined : message || "Vui lòng nhập trường này";
    },
    isEmail: (value, message) => {
        const regex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(value)
            ? undefined
            : message || "Vui lòng nhập đúng email";
    },
    minLength: (value, min) => {
        return value.length >= min
            ? undefined
            : `Vui lòng nhập tối thiểu ${min} kí tự`;
    },
    isConfirmed: (value, getConfirmValue, message) => {
        return value === getConfirmValue()
            ? undefined
            : message || "Giá trị nhập vào không chính xác";
    },
};

const FormValidator = () => {
    const [formValues, setFormValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};

        // Validate username
        const usernameError = Validator.isRequired(
            formValues.username,
            "Tên đăng nhập là bắt buộc"
        );
        if (usernameError) errors.username = usernameError;

        // Validate email
        const emailError = Validator.isEmail(
            formValues.email,
            "Email không hợp lệ"
        );
        if (emailError) errors.email = emailError;

        // Validate password
        const passwordError = Validator.minLength(formValues.password, 6);
        if (passwordError) errors.password = passwordError;

        // Validate confirmPassword
        const confirmPasswordError = Validator.isConfirmed(
            formValues.confirmPassword,
            () => formValues.password,
            "Mật khẩu không khớp"
        );
        if (confirmPasswordError) errors.confirmPassword = confirmPasswordError;

        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            setIsSubmitted(true);
            console.log(formValues);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formValues.username}
                    onChange={handleChange}
                />
                {formErrors.username && (
                    <span className="form-message">{formErrors.username}</span>
                )}
            </div>
            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formValues.email}
                    onChange={handleChange}
                />
                {formErrors.email && (
                    <span className="form-message">{formErrors.email}</span>
                )}
            </div>
            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formValues.password}
                    onChange={handleChange}
                />
                {formErrors.password && (
                    <span className="form-message">{formErrors.password}</span>
                )}
            </div>
            <div className="form-group">
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formValues.confirmPassword}
                    onChange={handleChange}
                />
                {formErrors.confirmPassword && (
                    <span className="form-message">
                        {formErrors.confirmPassword}
                    </span>
                )}
            </div>
            <button type="submit">Submit</button>
            {isSubmitted && <div>Form submitted successfully!</div>}
        </form>
    );
};

export default FormValidator;
