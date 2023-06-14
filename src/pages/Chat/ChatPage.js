import { useEffect, useState } from "react";

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

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
	useEffect(() => {
		ws.onmessage = (e) => console.log(JSON.parse(e.data))
	}, [])
	return <div style={{ height: '500px', overflow: 'auto' }}>
		{arr.map((message) => <Message />)}
		{arr.map((message) => <Message />)}
		{arr.map((message) => <Message />)}
	</div>
}

const Message = () => {

	const message = {
		ulr: 'https://placehold.co/60x40',
		author: 'Ihor',
		text: 'Hello'

	}

	return <div>
		<img src={message.ulr} alt="image" />
		<b>{message.author}</b>
		<p>{message.text}</p>
		<hr />
	</div>
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