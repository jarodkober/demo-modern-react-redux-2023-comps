import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const ADD_VALUE_TO_COUNT = 'add_value_to_count';
const DECREMENT_COUNT = 'decrement';
const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'set_value_to_add';

const reducer = (state, action) => {
	switch (action.type) {
		case ADD_VALUE_TO_COUNT:
			return {
				...state,
				count: state.count + state.valueToAdd,
				valueToAdd: 0
			};
		case DECREMENT_COUNT:
			return {
				...state,
				count: state.count - 1
			};
		case INCREMENT_COUNT:
			return {
				...state,
				count: state.count + 1
			};
		case SET_VALUE_TO_ADD:
			return {
				...state,
				valueToAdd: action.payload
			};
		default:
			throw new Error('Unexpected action type: ' + action.type);
	}
};

function CounterPage({ initialCount }) {
	const [state, dispatch] = useReducer(reducer, {
		count: initialCount,
		valueToAdd: 0
	});

	const increment = () => {
		dispatch({
			type: INCREMENT_COUNT
		});
	};

	const decrement = () => {
		dispatch({
			type: DECREMENT_COUNT
		});
	};

	const handleChange = (event) => {
		const value = parseInt(event.target.value) || 0;
		console.log(value);

		dispatch({
			type: SET_VALUE_TO_ADD,
			payload: value
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		dispatch({
			type: ADD_VALUE_TO_COUNT
		});
	};

	return (
		<Panel className="m-3">
			<h1 className="text-lg">Count is {state.count}</h1>
			<div className="flex flew-row">
				<Button
					onClick={increment}
					primary
				>
					Increment
				</Button>
				<Button
					onClick={decrement}
					secondary
				>
					Decrement
				</Button>
			</div>
			<form onSubmit={handleSubmit}>
				<label>Add a lot!</label>
				<input
					className="p-1 m-3 bg-gray-50 border border-gray-300"
					onChange={handleChange}
					type="number"
					value={state.valueToAdd || ''}
				/>
				<Button primary>Add it!</Button>
			</form>
		</Panel>
	);
}

export default CounterPage;
