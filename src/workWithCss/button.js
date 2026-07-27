import React from 'react';
import clsx from "clsx";
import styles from "./button.module.css";

function Button({ primary }) {
    const classes = clsx(styles.button1, {
        [styles.primary]: primary
    });

    return (
        <button className={classes}>click1</button>
    );
}

export default Button;
