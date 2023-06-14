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
