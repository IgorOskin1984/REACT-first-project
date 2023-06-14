import { useEffect, useState } from "react";

const wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
const storageKey = 'chatMessages';

const ChatPage = () => {
	return (
		<div>
			<Chat />
		</div>
	);
};

export default ChatPage;

const Chat = () => {
	return (
		<div>
			<Messages />
			<AddMessageForm />
		</div>
	);
};

const Messages = () => {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		wsChannel.onmessage = (e) => {
			const newMessages = JSON.parse(e.data);
			setMessages((messages) => [...messages, ...newMessages]);
			saveMessagesToStorage([...messages, ...newMessages]); // Save messages to localStorage
		};

		const storedMessages = getMessagesFromStorage();
		if (storedMessages) {
			setMessages(storedMessages);
		}
	}, []);

	const saveMessagesToStorage = (messages) => {
		localStorage.setItem(storageKey, JSON.stringify(messages));
	};

	const getMessagesFromStorage = () => {
		const storedMessages = localStorage.getItem(storageKey);
		return storedMessages ? JSON.parse(storedMessages) : null;
	};

	return (
		<div style={{ height: '500px', overflow: 'auto' }}>
			{messages.map((mes) => (
				<Message key={mes.userId} message={mes} />
			))}
		</div>
	);
};

const Message = ({ message }) => {
	return (
		<div>
			<img style={{ width: '30px' }} src={message.photo} alt="image" />
			<b>{message.userName}</b>
			<p>{message.message}</p>
			<hr />
		</div>
	);
};

const AddMessageForm = () => {
	const [message, setMessage] = useState('');

	const onClickHandle = () => {
		wsChannel.send(message);
		setMessage('');
	};

	return (
		<div>
			<div>
				<textarea value={message} onChange={(e) => setMessage(e.currentTarget.value)}></textarea>
			</div>
			<div>
				<button onClick={onClickHandle} type='submit'>Send Message</button>
			</div>
		</div>
	);
};
