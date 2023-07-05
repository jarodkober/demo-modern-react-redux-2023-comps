import classNames from 'classnames';
import useNavigtation from '../hooks/use-navigation';

function Link({ to, children }) {
	const { navigate } = useNavigtation();

	const classes = classNames('text-blue-500');

	const handleClick = (event) => {
		if (event.metaKey || event.ctrlKey) {
			return;
		}

		event.preventDefault();

		navigate(to);
	};

	return (
		<a
			className={classes}
			href={to}
			onClick={handleClick}
		>
			{children}
		</a>
	);
}
export default Link;
