export const required = (value) => {
	if(value) return undefined;
	return 'required field';
}

export const maxLenthCreater = (maxLength) => (value) => {
	if(value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
	return undefined
}

