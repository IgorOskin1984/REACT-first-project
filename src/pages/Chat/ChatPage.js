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
	const [messages, setMessages] = useState([])
	useEffect(() => {
		ws.onmessage = (e) => {
			console.log('hello');
			console.log(JSON.parse(e.data));
			setMessages(JSON.parse(e.data))
		}
	}, [])
	return <div style={{ height: '500px', overflow: 'auto' }}>
		{messages.map((message) => <Message key={message.userId} message={message} />)}
	</div>
}

const Message = ({ message }) => {


	return <div>
		<img src={message.photo} alt="image" />
		<b>{message.userName}</b>
		<p>{message.message}</p>
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