import useNavigtation from '../hooks/use-navigation';

function Route({ path, children }) {
	const { currentPath } = useNavigtation();

	if (path === currentPath) {
		return children;
	}

	return null;
}

export default Route;
