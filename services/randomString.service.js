const randomString = (length) => {
	const str = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890';
	let code = "";
	for(let i=0; i<length; i++)
	{
		code += str.charAt(Math.floor(Math.random()*str.length));
	}
	return code;
}

module.exports = randomString;