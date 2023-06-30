import className from 'classnames';
import PropTypes from 'prop-types';

function Button({
	children,
	primary,
	secondary,
	success,
	warning,
	danger,
	outline,
	rounded,
	...rest
}) {
	const classes = className('border px-3 py-1.5 flex items-center', {
		'border-blue-500 bg-blue-500': primary,
		'border-gray-900 bg-gray-900': secondary,
		'border-green-500 bg-green-500': success,
		'border-yellow-400 bg-yellow-400': warning,
		'border-red-500 bg-red-500': danger,
		'rounded-full': rounded,
		'bg-white': outline,
		'text-white': !outline,
		'text-blue-500': outline && primary,
		'text-gray-900': outline && secondary,
		'text-green-500': outline && success,
		'text-yellow-400': outline && warning,
		'text-red-500': outline && danger
	});
	return (
		<button
			{...rest}
			className={classes}
		>
			{children}
		</button>
	);
}

Button.propTypes = {
	primary: PropTypes.bool,
	secondary: PropTypes.bool,
	success: PropTypes.bool,
	warning: PropTypes.bool,
	danger: PropTypes.bool,
	outline: PropTypes.bool,
	rounded: PropTypes.bool,

	checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
		const count =
			Number(!!primary) +
			Number(!!secondary) +
			Number(!!success) +
			Number(!!warning) +
			Number(!!danger);

		if (count > 1) {
			return new Error(
				'Invalid props passed to Button component: There can only be a single variant.'
			);
		}
	}
};

export default Button;
