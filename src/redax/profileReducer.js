const ADD_POST = 'ADD-POST';
const APDATE_NEW_POST_TEXT = 'APDATE-NEW-POST-TEXT';

export const addNewPostActionCreator = () => ({ type: ADD_POST })

export const apdateNewPostTextActionCreator = (text) => ({
	type: APDATE_NEW_POST_TEXT,
	newText: text
})

let initialState = {
	postBodyData: [
				{ id: '1', text: 'Helo world', postLikeCounter: '11' },
			],
			newPostText: ''
}

const profilePageReducer = (profilePageState = initialState, action) => {
	switch (action.type) {

		case ADD_POST:
			let newPost = {
				id: 5,
				text: profilePageState.newPostText,
				postLikeCounter: 0
			};
			profilePageState.postBodyData.push(newPost);
			profilePageState.newPostText = '';
			return profilePageState;
			
		case APDATE_NEW_POST_TEXT:
			profilePageState.newPostText = action.newText;
			return profilePageState;

		default:
			return profilePageState;
	}
} 


export default profilePageReducer;