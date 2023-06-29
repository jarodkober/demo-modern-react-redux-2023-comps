import PropTypes from 'prop-types';

function Button({ children, primary, secondary, success, warning, danger, outline, rounded }) {
	return <button>{children}</button>;
}

Button.propTypes = {
	primary: PropTypes.bool,
	secondary: PropTypes.bool,
	success: PropTypes.bool,
	warning: PropTypes.bool,
	danger: PropTypes.bool,
	outline: PropTypes.bool,
	rounded: PropTypes.bool,

	checkVariationValue: (primary, secondary, success, warning, danger) => {
		const count =
			Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger);

		if (count > 1) {
			return new Error('Invalid props passed to Button component: There can only be a single variant.');
		}
	}
};

export default Button;
