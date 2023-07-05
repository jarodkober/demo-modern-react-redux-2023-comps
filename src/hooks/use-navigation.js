import { useContext } from 'react';
import NavigationContext from '../context/navigation';

function useNavigtation() {
	return useContext(NavigationContext);
}

export default useNavigtation;
