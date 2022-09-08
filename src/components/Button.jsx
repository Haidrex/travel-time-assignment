import React from 'react';
import styles from './Button.module.css';

const Button = ({ content, onClick, variant }) => {
	const buttonStyle =
		variant == 'dark' ? styles.buttonDark : styles.buttonLight;

	return (
		<button className={buttonStyle} onClick={onClick}>
			{content}
		</button>
	);
};

export default Button;
