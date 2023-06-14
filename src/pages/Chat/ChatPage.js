import { useEffect, useState } from "react";

const wsChanal = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

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
		wsChanal.onmessage = (e) => {
			console.log(JSON.parse(e.data));
			let newMessages = JSON.parse(e.data)
			setMessages((prevMessages) => [...prevMessages, ...newMessages])
		}
	}, [])
	return <div style={{ height: '500px', overflow: 'auto' }}>
		{messages.map((mes) => <Message key={mes.userId} message={mes} />)}
	</div>
}

const Message = ({ message }) => {


	return <div>
		<img style={{ width: '30px' }} src={message.photo} alt="image" />
		<b>{message.userName}</b>
		<p>{message.message}</p>
		<hr />
	</div>
}



const AddMessageForm = () => {
	const [message, setMessage] = useState('');
	const onClickHandle = () => {
		if (!message) return
		wsChanal.send(message);
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