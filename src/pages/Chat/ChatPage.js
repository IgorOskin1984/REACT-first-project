import { useState } from "react";

const ChatPage = () => {
	return <>
		<div>
			<Chat />
		</div>
	</>
}

export default ChatPage;

const Chat = () => {
	return <>
		<div>
			<Messages />
			<AddMessageForm />
		</div>
	</>
}

const Messages = () => {
	const arr = [1, 2, 3]
	return arr.map((message) => {
		return <Message />
	})
}

const Message = () => {
	return <div>message</div>
}



const AddMessageForm = () => {
	const [message, setMessage] = useState('');
	const onClickHandle = () => {
		alert(message);
		setMessage('')
	}
	return (
		<div>
			<div>
				<textarea value={message} onChange={(e) => setMessage(e.currentTarget.value)} ></textarea>
			</div>
			<div>
				<button onClick={onClickHandle} type='submit'>Send Message</button>
			</div>
		</div>
	)
}