import { render, screen } from '@testing-library/react';
import App from '../App';
import profilePageReducer, { addNewPostActionCreator } from '../redax/profileReducer';

let state = {
	postBodyData: [
		{
			id: '1',
			text: 'Helo world',
			postLikeCounter: '11'
		}
	]
}

test('text shoud be added', () => {
	let action = addNewPostActionCreator('hello test');
	let newState = profilePageReducer(state, action);
	expect(newState.postBodyData.length).toBe(2)
});
test('text shoud be correct', () => {
	let action = addNewPostActionCreator('hello test');
	let newState = profilePageReducer(state, action);
	expect(newState.postBodyData[1].text).toBe('hello test')
});
